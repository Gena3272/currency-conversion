import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StoreChangeFormService {
  saveDataForm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isSaved = false;
  clearForm$ = new Subject<void>();
}
