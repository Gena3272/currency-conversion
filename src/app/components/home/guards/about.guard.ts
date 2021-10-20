// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

// Material
import { MatDialog } from "@angular/material/dialog";

// Services
import { HomeService } from "../services/home.service";

// Components
import { HomeDialogComponent } from "../../shared/components/home-dialog/home-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class AboutGuard implements CanActivate {
  constructor(
    private homeService: HomeService,
    private dialog: MatDialog,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.homeService.accessInAbout) {
      this.dialog.open(HomeDialogComponent);
    }

    return this.homeService.accessInAbout;
  }
}
