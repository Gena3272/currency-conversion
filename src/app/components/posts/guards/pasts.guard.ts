// Angular
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';

// RxJs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PastsGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
