import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-me',
  templateUrl: './mini-me.component.html',
  styleUrls: ['./mini-me.component.scss']
})
export class MiniMeComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.sessionService.signOut();
    this.router.navigateByUrl('/welcome');
  }

}
