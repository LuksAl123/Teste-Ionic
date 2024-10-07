import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/pages/model/user/User';
import { sendPasswordResetEmail, setPersistence, browserLocalPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);

  recoverEmailPassword(email: string): Observable<void> {
    return new Observable<void>(observer => {
      sendPasswordResetEmail(this.auth, email).then(() => {
        observer.next();
        observer.complete();
      }).catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }

  login(email: string, password: string): Observable<User> {
    return new Observable<User>(observer => {
      setPersistence(this.auth, browserLocalPersistence).then(() => {
        return signInWithEmailAndPassword(this.auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            observer.next({ email, id: user.uid });
            observer.complete();
          }).catch(error => {
            observer.error(error);
            observer.complete();
          });
      }).catch(error => {
        observer.error(error);
        observer.complete();
      });
    });
  }
}