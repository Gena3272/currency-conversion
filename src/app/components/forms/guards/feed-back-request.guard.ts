// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

// Material
import { MatDialog } from "@angular/material/dialog";

// Services
import { FeedBackRequestService } from "../services/feed-back-request.service";

// Components
import { FeedBackRequestDialogComponent } from "../../shared/components/feed-back-request-dialog/feed-back-request-dialog.component";

@Injectable({
  providedIn: 'root',
})
export class FeedBackRequestGuard implements CanDeactivate<unknown> {
  constructor(
    private feedBackRequestService: FeedBackRequestService,
    private dialog: MatDialog,
  ) {}
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.feedBackRequestService.isSavedEmail) {
      this.dialog.open(FeedBackRequestDialogComponent);
    }

    return this.feedBackRequestService.isSavedEmail;
  }
}
