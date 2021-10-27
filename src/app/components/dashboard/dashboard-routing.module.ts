// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// Guards
import { DashboardGuard } from "./guards/dashboard.guard";

// Components
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { GeneralComponent } from "./components/general/general.component";
import { AdminComponent } from "./components/admin/admin.component";
import { ClientComponent } from "./components/client/client.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
  children: [
    {path: 'general', component: GeneralComponent, canActivateChild: [DashboardGuard],
      children: [
        {path: 'admin', component: AdminComponent},
        {path: 'client', component: ClientComponent},
      ]},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class DashboardRoutingModule {}
