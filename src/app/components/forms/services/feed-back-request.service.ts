// Angular
import { Injectable } from '@angular/core';

// RxJs
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FeedBackRequestService {
  saveEmail$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isSavedEmail = false;
  clearEmailForm$ = new Subject<void>();
}
