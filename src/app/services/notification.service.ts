import {Injectable, NgZone, OnDestroy} from '@angular/core';
import {MatLegacySnackBar as MatSnackBar, MatLegacySnackBarRef as MatSnackBarRef} from '@angular/material/legacy-snack-bar';
import {Subscription} from 'rxjs';
import {environment} from "../../environments/environment";
import {Logger} from "@aws-amplify/core";

const log = new Logger('map');

/**
 * Provides an abstract wrapper around showing a MatSnackbar
 * notification based on global environment or API provided
 * configuration.
 *
 * This class Listens for the authentication state to change.
 * Once the state becomes authenticated, retrieve the startup
 * configuration from the API service. Once de-authenticated
 * set the _params to undefined and unsubscribe.
 */
@Injectable({
              providedIn: 'root'
            })
export class NotificationService implements OnDestroy {


  // Configuration api subscription
  private _configState: Subscription;

  /**
   * Constructor
   * @param toast  {MatSnackBar}
   */
  constructor(
    private toast: MatSnackBar, private _zone: NgZone) {

  }


  /**
   * Unsubscribe from the config state
   * when the component is destroyed, and remove
   * the in-memory parameters.
   */
  ngOnDestroy() {
    this._configState.unsubscribe();
  }

    /**
     * Display a MatSnackbar notification and return the reference.
     * Will set the duration to the global configuration if present.
     * @param message {string}
     * @param buttonLabel {string}
     * @returns {MatSnackBarRef}
     */
    show(message: string, buttonLabel: string = "OK", toastTimeoutInMillis = 8000): MatSnackBarRef<any> {
        if (toastTimeoutInMillis > 0) {
            return this.toast.open(message, buttonLabel, {
                duration: toastTimeoutInMillis
            });
        } else {
            return this.toast.open(message, buttonLabel, {});
        }
    }


  public error(e: any) {
    if (environment.production) {
      log.error(e);
    } else {
      console.error(e);
        log.error(e);
      let msg = JSON.stringify(e);
      if (e.hasOwnProperty("message")) {
        msg = e.message;
      }
      return this.toast.open(`ERROR: ${msg} (this message will not appear in production)`, "got it", {
          duration:   90000,
          politeness: "assertive",
      });

    }
  }

  public dismiss() {
    this.toast.dismiss();
  }
}
