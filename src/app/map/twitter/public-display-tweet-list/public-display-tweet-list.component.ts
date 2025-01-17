import {Component, ElementRef, Input, NgZone, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {Tweet} from "../tweet";
import {PreferenceService} from "../../../pref/preference.service";
import {Logger} from "@aws-amplify/core";
import {Subscription, timer} from "rxjs";
import {environment} from "../../../../environments/environment";
import {AnnotationService} from "../../../pref/annotation.service";
import {MatLegacyDialog as MatDialog} from "@angular/material/legacy-dialog";
import {MatLegacyMenuTrigger as MatMenuTrigger} from "@angular/material/legacy-menu";


const log = new Logger("pd-tweet-list");
/**
 * The TweetListComponent is responsible for managing an invisibly
 * paged infinite scroll collection of tweets. At present all
 * tweets are stored in memory but their rendering is scrolled for browser performance.
 */
@Component({
               selector:    "app-pd-tweet-list",
               templateUrl: "./public-display-tweet-list.component.html",
               styleUrls:   ["./public-display-tweet-list.component.scss"]
           })
export class PublicDisplayTweetListComponent implements OnInit, OnDestroy {
    @ViewChildren("tweet") tweetEl: QueryList<ElementRef>;
    @Input()
    public annotationTypes: any[] = [];
    public styles: { [id: string]: string; } = {};

    public loaded: boolean[] = [];
    public tweetCount = 0;
    public ready: boolean;
    public utc: boolean = environment.timezone === "UTC";
    @ViewChild("appMenu") menuTrigger: MatMenuTrigger;
    private _destroyed = false;
    private annotations: { [key: string]: any } = {};

    private _tweets: Tweet[] | null = [];
    private scrollPosition: number;
    private _scrollTimer: Subscription;

    public get tweets(): Tweet[] {
        return this._tweets;
    }

    /**
     * The tweets to render or null if not yet ready.
     *
     * @param val the tweets or null
     */
    @Input()
    public set tweets(val: Tweet[] | null) {
        if (val === null) {
            // this.ready = false;
            this._tweets = [];
            this.ready = false;
            this.tweetCount = 0
            this.scrollPosition = 0;
            log.debug("Tweets reset");
            return;
        }
        this.updateTweets(val);

    }

    constructor(private _zone: NgZone, private _dialog: MatDialog, public pref: PreferenceService,
                public annotate: AnnotationService) {
    }


    async ngOnInit() {
        this.scrollPosition = 0;
        await this.pref.waitUntilReady();
        this._scrollTimer = timer(0, this.pref.combined.publicDisplayTweetScrollRate).subscribe(async () => {
            if (this.tweetEl) {
                if (this.tweetEl.get(this.scrollPosition)) {
                    this.tweetEl.get(this.scrollPosition).nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
                }
                this.scrollPosition++;
                if (this.scrollPosition >= this.tweetEl.length) {
                    this.scrollPosition = 0;
                }
            }
        });
    }

    public ngOnDestroy(): void {
        if (this._scrollTimer) {
            this._scrollTimer.unsubscribe();
        }
        this._destroyed = true;

    }

    public styleFor(type: string, tweet: Tweet) {
        const value = (this.annotations[tweet.id] || {})[type];
        log.debug("Annotation value is ", value);
        let filtered: any[] = this.annotationTypes.filter(i => i.name === type);
        log.debug("Annotations filtered: ", filtered);
        for (const filteredElement of filtered) {
            for (const option of filteredElement.options) {
                if (option.value === value) {
                    log.verbose("Annotations selected ", option);
                    this.styles[tweet.id] = "border-left: 3px solid " + option.color;
                }
            }
        }


        return "border-left: 3px solid transparent";

    }


    /**
     * Update the tweets stored in this list.
     * @param val an array of {@link Tweet}s
     */
    private updateTweets(val: Tweet[]) {
        for (const tweet of val) {
            this.styleFor("impact", tweet);
        }
        this.tweetCount = val.length;
        log.debug("updateTweets()");
        if (this._destroyed) {
            return;
        }
        let changed = false;
        if (val.length !== this._tweets.length) {
            changed = true;
        } else {
            for (let i = 0; i < val.length; i++) {
                if (this._tweets[i].id !== val[i].id) {
                    changed = true;
                }

            }
        }
        if (!changed) {
            log.debug("No change, returning from updateTweets()");
            this.ready = true;
            return;
        }

        if (val.length !== this._tweets.length) {
            this._tweets.length = val.length;
        }
        if (this.loaded.length !== val.length) {
            this.loaded.length = val.length;
        }

        for (let i = 0; i < val.length; i++) {

            const tweet = val[i];

            this._tweets[i] = tweet;
            if (tweet.valid) {
                this.annotate.getAnnotations(tweet).then(tweetAnnotationRecord => {
                    if (tweetAnnotationRecord && tweetAnnotationRecord.annotations && tweetAnnotationRecord.annotations[0] !== "u") {
                        log.debug("Annotation record for tweet was ", tweetAnnotationRecord.annotations);
                        this.annotations[tweet.id] = tweetAnnotationRecord.annotations;
                    } else {
                        this.annotations[tweet.id] = {};
                    }
                });
            }
            if (this._tweets[i] && this._tweets[i].id !== tweet.id) {
                this._tweets[i] = tweet;
            }
        }
        log.debug(this.annotations);
        log.debug(this.tweets);

        this.pref.waitUntilReady().then(i => this.ready = true);
    }


}
