import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CreateFormService {
  isSaveValueInForm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  checkSavedForm = false;
  isClose$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
