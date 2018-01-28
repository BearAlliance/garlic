import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private isSignedInSource = new Subject<boolean>();
  private defaultRedirectUrl = '/home';

  isSignedIn$ = this.isSignedInSource.asObservable();
  isSignedIn = false;
  redirectUrl: string;

  constructor(private router: Router) { }

  getSigninObservable(): Observable<boolean> {
    return this.isSignedIn$;
  }

  signIn() {
    this.isSignedIn = true;
    this.isSignedInSource.next(this.isSignedIn);
    const redirectUrl = this.redirectUrl ? this.redirectUrl : this.defaultRedirectUrl;
    this.router.navigateByUrl(redirectUrl);
    this.redirectUrl = '';
  }

  signOut() {
    this.isSignedIn = false;
    this.isSignedInSource.next(this.isSignedIn);
  }
}
