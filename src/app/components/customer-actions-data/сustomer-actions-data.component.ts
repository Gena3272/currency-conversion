// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { BehaviorSubject, interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

// Service
import { CustomerActionsDataService } from "./services/customerActionsData.service";

// Models
import { CustomerActionsData } from "./models/CustomerActionsData.models";

@Component({
  selector: 'app-customer-actions-data',
  templateUrl: './customer-actions-data.component.html',
  styleUrls: ['./customer-actions-data.component.scss'],
})
export class CustomerActionsDataComponent implements OnInit, OnDestroy {
  customerActionsDataList$: BehaviorSubject<CustomerActionsData[]>;
  showResult = false;

  private interval$ = interval(100);
  private unSubscribe$ = new Subject<void>();
  private index: number;

  constructor(private customerActionsDataService: CustomerActionsDataService) {}

  ngOnInit(): void {
    this.interval$
      .pipe(
        takeUntil(this.unSubscribe$),
      )
      .subscribe(v => this.index = v);

    this.customerActionsDataList$ = this.customerActionsDataService.customerActionsDataList$;
  }

  addCustomerActionsData(): void {
    this.customerActionsDataService.addCustomerActionsData(this.index);
  }

  showResults(): void {
    this.showResult = !this.showResult;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
