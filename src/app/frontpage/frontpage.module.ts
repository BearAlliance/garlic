import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontpageRoutingModule } from './frontpage-routing.module';
import { FrontpageComponent } from './frontpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';


@NgModule({
  imports: [
    CommonModule,
    FrontpageRoutingModule
  ],
  declarations: [
    FrontpageComponent,
    WelcomeComponent,
    SignUpComponent,
    SignUpSuccessComponent,
    SignUpFormComponent,
  ],
  entryComponents: [FrontpageComponent]
})
export class FrontpageModule { }
