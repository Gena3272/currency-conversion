// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

// Material
import { MatDialog } from "@angular/material/dialog";

// Services
import { RegistrationFormService } from "../services/registration-form.service";

// Components
import { HomeDialogComponent } from "../../shared/components/home-dialog/home-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class RegistrationFormGuard implements CanDeactivate<unknown> {
  constructor(
    private registrationFormService: RegistrationFormService,
    private dialog: MatDialog,
  ) {}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.registrationFormService.isValidForm) {
      this.dialog.open(HomeDialogComponent);
    }

    return this.registrationFormService.isValidForm;
  }
}
