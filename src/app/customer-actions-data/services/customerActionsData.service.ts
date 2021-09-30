// Angular
import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from "rxjs";

// Models
import { CustomerActionsData } from "../models/CustomerActionsData.models";

@Injectable({
  providedIn: 'root',
})
export class CustomerActionsDataService {
  customerActionsDataList$ = new BehaviorSubject<CustomerActionsData[]>([]);

  addCustomerActionsData(index: number): void {
    this.customerActionsDataList$.next([...this.customerActionsDataList$.value, {value: index}]);
  }
}
