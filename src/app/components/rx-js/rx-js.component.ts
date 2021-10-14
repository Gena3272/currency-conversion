// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJs
import { interval, of, Subject } from "rxjs";
import { filter, map, takeUntil, takeWhile, tap } from "rxjs/operators";

// Constants
import { B, EXAMPLE_RESULT } from "./constants/rs-js.constants";

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss'],
})
export class RxJsComponent implements OnInit, OnDestroy {
  private filteringNumbers$ = of(1, 2, 3, 4);
  private usersData$ = of({name: 'a'}, {name: B}, {name: 'c'});
  private interval$ = interval(1000);
  private resultValidityList: number[] = [];
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.filterOfNums();
    this.modificationObj();
    this.actionsDataInInterval();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private filterOfNums(): void {
    this.filteringNumbers$
      .pipe(
        filter((v) => v === 1),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }

  private modificationObj(): void {
    this.usersData$
      .pipe(
        filter((v) => v.name === B),
        map((v) => [{...v, age: 22 }]),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }

  private actionsDataInInterval(): void {
    this.interval$
      .pipe(
        takeWhile(() => EXAMPLE_RESULT.toString() !== this.resultValidityList.toString()),
        filter((v) => EXAMPLE_RESULT.includes(v)),
        tap(v => this.resultValidityList.push(v)),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }
}
