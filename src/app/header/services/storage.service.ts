// Angular
import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  indexList$ = new BehaviorSubject<any>([]);

  addValue(index: number): any {
    this.indexList$.next([...this.indexList$.value, {value: index}]);
  }
}
