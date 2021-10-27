// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

// Material
import { MatDialog } from "@angular/material/dialog";

// services
import { DashboardService } from "../services/dashboard.service";

// components
import { HomeDialogComponent } from "../../shared/components/home-dialog/home-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivateChild {
  constructor(
    private dashboardService: DashboardService,
    private dialog: MatDialog,
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return  this.dashboardService.authorizedAccessList$.pipe(
      map(authorized => {
        const isAuth = authorized.includes(childRoute.url[0].path);

        if(!isAuth) {
          this.dialog.open(HomeDialogComponent);
        }

        return isAuth;
      }),
    )
  }
}
