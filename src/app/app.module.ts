import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SessionService} from './session.service';
import { MiniMeComponent } from './mini-me/mini-me.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    TopNavComponent,
    SignInComponent,
    MiniMeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
