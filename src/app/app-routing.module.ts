import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: 'app/frontpage/frontpage.module#FrontpageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
