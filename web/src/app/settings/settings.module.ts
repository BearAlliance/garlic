import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [SettingsComponent, ProfileComponent, AccountComponent, VendorComponent, AddVendorComponent],
  entryComponents: [SettingsComponent]
})
export class SettingsModule {
}
