import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { recoverPassword, recoverPasswordSuccess, recoverPasswordFail, login, loginFail, loginSuccess } from "./login.actions";

@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    recoverPassword$ = createEffect(() => 
        this.actions$.pipe(
            ofType(recoverPassword),
            switchMap((payload: { email: string }) => 
                this.authService.recoverEmailPassword(payload.email).pipe(
                    map(() => recoverPasswordSuccess()),
                    catchError(error => of(recoverPasswordFail({ error })))
                ))
        ))

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        switchMap((payload: {email: string, password: string}) => 
            this.authService.login(payload.email, payload.password).pipe(
                map(user => loginSuccess({user})),
                catchError(error => of(loginFail({error})))
            )
        )
    ))
}
