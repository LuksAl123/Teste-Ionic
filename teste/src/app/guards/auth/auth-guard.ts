import { Injectable } from '@angular/core';
import { CanMatch, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap, take } from 'rxjs';
import { AppState } from 'src/store/AppState';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanMatch {

  constructor(private store: Store<AppState>, private router: Router) { }

  canMatch(): Observable<boolean> {
    console.log('AuthGuard triggered');
    return this.store.select('login').pipe(
      take(1),
      switchMap(loginState => {
        console.log('Login State:', loginState);
        if (loginState.isLoggedIn){
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}
