// Angular
import { Injectable } from '@angular/core';

// RxJS
import { BehaviorSubject } from "rxjs";
import { indexList } from "../models/main.models";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  indexList$ = new BehaviorSubject<indexList[]>([]);

  addIndexObj(index: number): void {
    this.indexList$.next([...this.indexList$.value, {value: index}]);
  }
}
