import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellComponent } from './shell/shell.component';
import { TopNavComponent } from './top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
