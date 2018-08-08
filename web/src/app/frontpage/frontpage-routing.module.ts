import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FrontpageComponent } from './frontpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'signup',
        component: SignUpComponent,
        children: [
          {path: '', component: SignUpFormComponent},
          {path: 'success', component: SignUpSuccessComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontpageRoutingModule {
}
