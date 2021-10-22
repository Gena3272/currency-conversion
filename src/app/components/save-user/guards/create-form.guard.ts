// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

// Material
import { MatDialog } from "@angular/material/dialog";

// Services
import { CreateFormService } from "../services/create-form.service";

// Components
import { SaveDialogComponent } from "../../shared/components/save-dialog/save-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class CreateFormGuard implements CanDeactivate<unknown> {
  constructor(
    private createFormService: CreateFormService,
    private dialog: MatDialog,
  ) {}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.createFormService.checkSavedForm) {
      this.dialog.open(SaveDialogComponent);
    }

    return this.createFormService.checkSavedForm;
  }
}
