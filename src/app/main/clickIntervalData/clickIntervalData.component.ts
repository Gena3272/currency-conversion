// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { BehaviorSubject, interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

// Service
import { StorageService } from "../services/storage.service";
import { indexList } from "../models/main.models";

@Component({
  selector: 'app-adding-data',
  templateUrl: './clickIntervalData.component.html',
  styleUrls: ['./clickIntervalData.component.scss'],
})
export class ClickIntervalDataComponent implements OnInit, OnDestroy{
  indexObjList$: BehaviorSubject<indexList[]>
  showResult = false;
  private interval$ = interval(100);
  private unSubscribe$ = new Subject<void>();
  private index: number;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.interval$
      .pipe(
        takeUntil(this.unSubscribe$),
      )
      .subscribe(v => this.index = v);

    this.indexObjList$ = this.storageService.indexList$;
  }

  AddIndexObjInList(): void {
    this.storageService.addIndexObj(this.index);
  }

  showResults(): void {
    this.showResult = !this.showResult
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
