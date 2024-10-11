import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';
import { sendPasswordResetEmail, setPersistence, browserLocalPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { UserRegister } from 'src/app/model/user/UserRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);

  register(userRegister: UserRegister) : Observable<void> {
    return new Observable<void>(observer => {
      setTimeout(() => {
        if (userRegister.email == "error@email.com") {
          observer.error({message: "email is already registered"});
        } else {
          observer.next();
        }
        observer.complete();
      }, 3000)
    })
  }

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
      });
    });
  }
}