// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

// Service
import { StorageService } from "../services/storage.service";

@Component({
  selector: 'app-adding-data',
  templateUrl: './addingData.component.html',
  styleUrls: ['./addingData.component.scss'],
})
export class AddingDataComponent implements OnInit, OnDestroy{
  private interval$ = interval(100);
  private unSubscribe$ = new Subject<void>();
  private index: number;
  indexList: any;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.interval$
      .pipe(
        takeUntil(this.unSubscribe$),
      )
      .subscribe(v => this.index = v);

    this.storageService.indexList$.subscribe();
  }

  onClick(): void {
    this.storageService.addValue(this.index);
  }

  displayingArrayValues(): void {
    this.indexList = this.storageService.indexList$.value;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
