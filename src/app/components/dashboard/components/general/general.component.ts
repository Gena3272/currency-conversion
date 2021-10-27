// Angular
import { Component } from '@angular/core';

// Services
import { DashboardService } from "../../services/dashboard.service";

// Constants
import { ADMIN, CLIENT } from "../../constants/dashboard";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  ADMIN = ADMIN;
  CLIENT = CLIENT;

  constructor(private dashboardService: DashboardService) {}

  addAuthorizationItem(authorizedItem: string): void {
    this.dashboardService.addAuthorizationItem(authorizedItem);
  }

  removeAuthorizationItem(authorizedItem: string): void {
    this.dashboardService.removeAuthorizationItem(authorizedItem);
  }
}
