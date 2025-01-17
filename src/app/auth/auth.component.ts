import {Component, OnInit, NgZone} from '@angular/core';
import Auth from '@aws-amplify/auth';
import {ActivatedRoute, Router} from '@angular/router';
import {Hub} from '@aws-amplify/core';
import {LoadingProgressService} from "../services/loading-progress.service";

@Component({
               selector:    'app-auth',
               templateUrl: './auth.component.html',
               styleUrls:   ['./auth.component.scss']
           })
export class AuthComponent implements OnInit {

    constructor(private _router: Router, private _zone: NgZone, private _route: ActivatedRoute, private loading: LoadingProgressService) {
    }

    ngOnInit() {
        Hub.listen("auth", ({payload: {event, data}}) => {
            switch (event) {
                case "signIn":
                    this._zone.run(() => {
                        window.location.replace(this._route.snapshot.queryParams["_return"]);

                    });
                    break;
                case "signOut":
                    this._zone.run(() => {
                        this._router.navigate(['/auth/signin'], {queryParamsHandling: "merge"});
                    });
                    break;
            }
        });
        Auth.currentAuthenticatedUser()
            .then(() => {
                window.location.replace(this._route.snapshot.queryParams["_return"]);

            })
            .catch(() => {
            });
    }

}
