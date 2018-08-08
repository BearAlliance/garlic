import { Component, OnInit } from '@angular/core';
import { AuthService } from '../session.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isSignedIn$: Observable<boolean>;
  isSignedIn: boolean;
  showMobileNav = false;

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.isSignedIn$ = this.authService.getSigninObservable();
    this.isSignedIn$.subscribe((isSignedIn: boolean) => {
      this.isSignedIn = isSignedIn;
    });

  }

  testApi() {
    this.http.get('/test')
      .subscribe((res: any) => {
          console.log('res', res);
        },
        (err: any) => {
          console.log('err', err);
        });
  }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

}
