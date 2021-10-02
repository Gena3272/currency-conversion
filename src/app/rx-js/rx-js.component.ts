// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJs
import { interval, of, Subject } from "rxjs";
import { filter, map, skip, take, takeUntil, toArray } from "rxjs/operators";

// Constants
import { A, B, C } from "./constants/rs-js.constants";

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss'],
})
export class RxJsComponent implements OnInit, OnDestroy {
  private filteringNumbers$ = of(1, 2, 3, 4);
  private modificationObject$ = of({name: A}, {name: B}, {name: C});
  private interval$ = interval(1000);
  private unSubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.filteringNumbers$
      .pipe(
        filter((v) => v === 1),
        takeUntil(this.unSubscribe$),
      )
      .subscribe();

    this.modificationObject$
      .pipe(
        filter((v) => v.name === B),
        map((v) => [v, { age: 22 }]),
        takeUntil(this.unSubscribe$),
      )
      .subscribe();

    this.interval$
      .pipe(
        skip(1),
        filter((v) => v !== 5 && v !== 6 && v !== 7),
        take(5),
        toArray(),
        takeUntil(this.unSubscribe$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
