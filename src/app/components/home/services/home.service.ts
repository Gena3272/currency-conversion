// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  accessInAbout = false;

  denyAccessInAbout(): boolean {
    this.accessInAbout = false;

    return this.accessInAbout;
  }

  allowAccessInAbout(): boolean {
    this.accessInAbout = true;

    return this.accessInAbout;
  }
}
