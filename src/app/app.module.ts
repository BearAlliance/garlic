import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthService} from './session.service';
import { MiniMeComponent } from './mini-me/mini-me.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    TopNavComponent,
    SignInComponent,
    MiniMeComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
