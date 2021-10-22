// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

// Material
import { MatDialog } from "@angular/material/dialog";

// Services
import { StoreChangeFormService } from "../services/store-change-form.service";

// Components
import { SaveDialogComponent } from "../../shared/components/save-dialog/save-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class SaveFormGuard implements CanDeactivate<unknown> {
  constructor(
    private storeChangeFormService: StoreChangeFormService,
    private dialog: MatDialog,
  ) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.storeChangeFormService.isSaved) {
      this.dialog.open(SaveDialogComponent);
    }

    return this.storeChangeFormService.isSaved;
  }
}
