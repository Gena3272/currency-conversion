// Angular
import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from "rxjs";

// Models
import { CustomerData } from "../models/CustomerActionsData.models";

@Injectable({
  providedIn: 'root',
})
export class CustomerActionsDataService {
  customerActionsDataList$ = new BehaviorSubject<CustomerData[]>([]);

  addCustomerData(index: number): void {
    this.customerActionsDataList$.next([...this.customerActionsDataList$.value, {value: index}]);
  }
}
