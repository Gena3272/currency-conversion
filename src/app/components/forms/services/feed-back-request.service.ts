// Angular
import { Injectable } from '@angular/core';

// RxJs
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FeedBackRequestService {
  email$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isSavedEmail = false;
  clearEmail$ = new Subject<void>();
}
