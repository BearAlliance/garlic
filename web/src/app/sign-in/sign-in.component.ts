import { Component, OnInit } from '@angular/core';
import { AuthService } from '../session.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private sessionService: AuthService) {
  }

  ngOnInit() {
  }

  signIn() {
    this.sessionService.signIn();
  }

}
