import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', loadChildren: 'app/frontpage/frontpage.module#FrontpageModule'},
  {path: 'signin', component: SignInComponent},
  {path: 'home', component: HomeComponent},
  {path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
