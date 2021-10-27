// Angular
import { Injectable } from '@angular/core';

// RxJs
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  authorizedAccessList$ = new BehaviorSubject<string[]>([]);

  addAuthorizationItem(authorizationItem: string): void {
    const updateAuthorizationList = this.authorizedAccessList$.value.filter((item: string) => item !== authorizationItem);

    this.authorizedAccessList$.next([...updateAuthorizationList, authorizationItem]);
  }

  removeAuthorizationItem(authorizationItem: string): void {
    const updateAuthorizationList = this.authorizedAccessList$.value.filter((item: string) => item !== authorizationItem);

    this.authorizedAccessList$.next(updateAuthorizationList);
  }
}
