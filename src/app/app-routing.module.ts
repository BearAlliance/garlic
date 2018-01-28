import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path: 'welcome', loadChildren: 'app/frontpage/frontpage.module#FrontpageModule'},
  {path: 'signin', component: SignInComponent},
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    loadChildren: 'app/settings/settings.module#SettingsModule'
  },

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
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
