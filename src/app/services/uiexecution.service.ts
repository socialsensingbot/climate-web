import {EventEmitter, Inject, Injectable} from "@angular/core";
import {Subscription, timer} from "rxjs";
import {Logger} from "@aws-amplify/core";
import {NotificationService} from "./notification.service";
import {RollbarService} from "../error";
import * as Rollbar from "rollbar";
import Auth from "@aws-amplify/auth";

const log = new Logger("uiexecution");

const maxTaskDuration: number = 1000;

class ExecutionTask {
    public rescheduleAttempts: number = 0;

    constructor(public resolve: (value?: any) => void, public reject: (reason?: any) => void,
                private _task: (interrupted: () => boolean) => any, public name: string, public waitForStates: AppState[] | null,
                private _dedup: string, private _notify: NotificationService, public reschedule: boolean,
                public silentFailure: boolean, public waitForUIState: UIState, public rescheduleDelay: number,
                public maxRescheduleAttempts: number, public interrupted: boolean = false) {

    }


    get dedup(): string {
        return this._dedup;
    }

    public async execute() {
        try {
            const start = Date.now();
            log.verbose("ExecutionTask: executing " + this.name + "(" + this.dedup + ")");
            let result: any = await this._task(() => this.interrupted);
            log.verbose("ExecutionTask: finished " + this.name + "(" + this.dedup + ") with result ", result);
            this.resolve(result);
            if (Date.now() - start > maxTaskDuration) {
                log.warn(
                    `Task exceeded maximum recommended duration: ${this.name}(${this.dedup}) max is ${maxTaskDuration} this took ${Date.now() - start}`);
            }
        } catch (e) {
            log.error("ERROR Executing " + this.name);
            this.reject(e);
        }
    }
}

export type AppState =
    "init"
    | "map-init"
    | "ready"
    | "no-params"
    | "data-refresh";
export type UIState = "init" | "active" | "inactive";

export const DUPLICATE_REASON = "duplicate";

const inactivityInMilliseconds = 1000;

/**
 * The UIExecutionService is responsible for making sure
 * certain tasks are executed in serial and that they are only executed
 * if the internal state machine is in the correct state.
 *
 * The effect of this is to give a deterministic start up process.
 */
@Injectable({
                providedIn: "root"
            })
export class UIExecutionService {

    public state = new EventEmitter<AppState>();
    public uiStateChange = new EventEmitter<UIState>();
    public uistate: UIState = "init";
    private _queue: ExecutionTask[] = [];
    private _executionTimer: Subscription;
    private _pause: boolean;
    private _state: AppState = "init";
    private dedupMap: Map<any, ExecutionTask> = new Map<any, ExecutionTask>();
    private lastUIActivity: number = 0;
    private _uiInactiveTimer: Subscription;
    private currentTask: ExecutionTask;

    constructor(private _notify: NotificationService, @Inject(RollbarService) private _rollbar: Rollbar) {
    }

    public async start() {
        await Auth.currentAuthenticatedUser();
        this._uiInactiveTimer = timer(0, 100).subscribe(() => {
            if (this.lastUIActivity < Date.now() - inactivityInMilliseconds) {
                // console.log("inactive");
                this.uistate = "inactive";
                this.uiStateChange.emit(this.uistate);
            } else {
                // console.log("active");
            }
        });
        this._executionTimer = timer(0, 100).subscribe(async () => {
            if (this._queue.length > 0) {
                log.verbose(this._queue.length + " items in the execution queue ", this._queue);
            }
            const snapshot = [...this._queue];
            this._queue = [];
            while (snapshot.length > 0 && !this._pause) {
                const task = snapshot.shift();
                try {
                    log.verbose("Execution Queue", this._queue);
                    log.verbose(`Task ${task.name} taken from queue`);
                    if ((task.waitForStates === null || task.waitForStates.indexOf(
                        this._state) >= 0) && (task.waitForUIState === null || this.uistate === task.waitForUIState)) {
                        log.verbose(`Executing ${task.name}(${task.dedup})`);
                        try {
                            this.currentTask = task;
                            await task.execute();
                        } catch (e) {
                            log.error(`ERROR: executing ${task.name}(${task.dedup})`, e);
                        } finally {
                            this.currentTask = null;
                        }
                        log.verbose(`Executed ${task.name}(${task.dedup})`);
                        if (task.dedup !== null) {
                            this.dedupMap.delete(task.dedup);
                        }
                    } else {
                        if (task.reschedule) {
                            task.rescheduleAttempts++;
                            if (task.rescheduleAttempts < task.maxRescheduleAttempts) {
                                setTimeout(
                                    () => {

                                        this._queue.push(task);
                                        log.verbose(
                                            `RE-ADDED out of sequence task ${task.name} for ${task.rescheduleDelay}ms on execution queue,
              state ${this._state} needs to be one of ${task.waitForStates} and ${this.uistate} must be ${task.waitForUIState}.`,
                                            this._queue);
                                    }, task.rescheduleDelay
                                );
                                log.verbose(
                                    `RESCHEDULED out of sequence task ${task.name} for ${task.rescheduleDelay}ms on execution queue,
              state ${this._state} needs to be one of ${task.waitForStates} and ${this.uistate} must be ${task.waitForUIState}.`);
                            } else {
                                log.warn(`FAILED TO RESCHEDULE out of sequence task ${task.name} on execution queue,
              state ${this._state} needs to be one of ${task.waitForStates} and ${this.uistate} must be ${task.waitForUIState}, max attempts (${task.maxRescheduleAttempts}) exceeded.`);
                            }
                        } else {
                            const message = `Skipped out of sequence task ${task.name} on execution queue,
             state ${this._state} should be one of ${task.waitForStates} and ${this.uistate} must be ${task.waitForUIState}.`;
                            if (task.silentFailure) {
                                log.debug(message);
                            } else {
                                this._notify.error(message);
                            }
                            // this._queue.push(task)
                        }
                    }
                } catch (e) {
                    console.error(`FAILED TO EXECUTE task ${task.name} on execution queue error was: ${e.message}`, e);
                }
            }


        });
    }

    public stop() {
        this._executionTimer.unsubscribe();
        this._uiInactiveTimer.unsubscribe();
    }

    public pause() {
        this._pause = true;
    }

    public unpause() {
        this._pause = false;

    }

    public uiActivity() {
        this.lastUIActivity = Date.now();
        this.uistate = "active";
        this.uiStateChange.emit(this.uistate);
    }

    public queueWithInterrupt(name: string, waitForStates: AppState[] | null, task: () => any) {
        this.queue(name, waitForStates, task, true, true, false, true, false, null, 100, 100000)
    }

    public queue(name: string, waitForStates: AppState[] | null, task: (interrupted: () => boolean) => any, dedup: any = null,
                 interruptable: boolean = false, silentFailure: boolean = false, replaceExisting: boolean = false,
                 reschedule: boolean = false, waitForUIState: UIState = null, rescheduleDelayInMillis = 100,
                 maxRescheduleAttempts = 100000) {

        return new Promise<any>((resolve, reject) => {
            let dedupKey = null;
            if (dedup !== null) {
                dedupKey = name + ":" + dedup;

            }
            const executionTask = new ExecutionTask(resolve, reject, task, name, waitForStates, dedupKey, this._notify,
                                                    reschedule, silentFailure, waitForUIState, rescheduleDelayInMillis,
                                                    maxRescheduleAttempts);
            if (dedupKey !== null) {
                if (interruptable && this.currentTask && this.currentTask.dedup === dedupKey) {
                    log.debug("Interrupting " + this.currentTask.name + " with dedup" + dedupKey)
                    this.currentTask.interrupted = true;
                }
                if (this.dedupMap.has(dedupKey)) {
                    if (replaceExisting) {
                        log.debug(
                            `Replacing existing ${name} (${dedupKey}) on execution queue as this task is already queued and deduplication is turned on.`);
                        if (!silentFailure) {
                            log.warn(`Replacing duplicate ${name} (${dedupKey}) on execution queue`);
                        }
                        const oldTask = this.dedupMap.get(dedupKey);
                        executionTask.resolve = (value) => {
                            log.debug("Resolving original task " + oldTask.dedup);
                            oldTask.resolve(value);
                            resolve(value);
                        };
                        this._queue = this._queue.filter(i => i.dedup !== oldTask.dedup);
                        this.dedupMap.set(dedupKey, executionTask);
                    } else {
                        if (silentFailure) {
                            resolve(null);
                        } else {
                            let duplicateMessage: string = `Duplicate ${name} (${dedupKey}) on execution queue as this task is already queued.`;
                            log.error(duplicateMessage);
                            console.trace(duplicateMessage);
                            reject(duplicateMessage);
                        }
                        return;
                    }
                } else {
                    this.dedupMap.set(dedupKey, executionTask);
                }
            }
            this._queue.push(executionTask);
            log.verbose(`Added ${name} to queue`);
        });
    }

    public changeState(newState: AppState) {
        this._state = newState;
        this.state.emit(newState);
        log.debug("*** STATE " + newState.toUpperCase().replace("-", " ") + " ***");
    }
}
