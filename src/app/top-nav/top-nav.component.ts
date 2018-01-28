import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isSignedIn$: Observable<boolean>;
  isSignedIn: boolean;

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.isSignedIn$ = this.sessionService.getSigninObservable();
    this.isSignedIn$.subscribe((isSignedIn: boolean) => {
      this.isSignedIn = isSignedIn;
    });
  }

}
