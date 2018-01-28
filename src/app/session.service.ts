import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {

  private isSignedInSource = new Subject<boolean>();
  isSignedIn$ = this.isSignedInSource.asObservable();


  constructor() { }

  getSigninObservable(): Observable<boolean> {
    return this.isSignedIn$;
  }

  signIn() {
    this.isSignedInSource.next(true);
  }

  signOut() {
    this.isSignedInSource.next(false);
  }
}
