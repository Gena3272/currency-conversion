// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

// Modules
import { DashboardRoutingModule } from "./dashboard-routing.module";

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GeneralComponent } from './components/general/general.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GeneralComponent,
    AdminComponent,
    ClientComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ],
  exports: [
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
