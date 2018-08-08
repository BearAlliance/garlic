import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'account', component: AccountComponent},
      {path: 'vendor', component: VendorComponent},
      {path: 'vendor/add', component: AddVendorComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
