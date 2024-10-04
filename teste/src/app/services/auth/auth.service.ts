import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/pages/model/user/User';
import { Auth, sendPasswordResetEmail, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { } // *

  recoverEmailPassword(email: string) : Observable<void> {
    return new Observable<void>(observer => {
      sendPasswordResetEmail(this.auth, email).then(() => {
        observer.next();
        observer.complete();
      }).catch(error => {
        observer.error(error);
        observer.complete();
      })
    })
  }

  login(email: string, password: string) : Observable<User>{
    return new Observable<User>(observer => {
      setTimeout(() => {
        if (email == "error@email.com"){
          observer.error({message: 'User not found'});
          observer.next();
        } else {
          const user = new User();
          user.email = email;
          user.id = "userId";
          observer.next(user);
        }
        observer.complete();
      }, 3000)
    })
  }
} 