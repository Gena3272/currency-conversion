// Angular
import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";

// RxJs
import { Observable, of, timer } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, loadPage: () => Observable<any>): Observable<any> {
    if (route.data['preload']) {
      const delay = route.data['delay'];

      return timer(delay).pipe(
        map(() => loadPage()));
    }

    return of(null);
  }
}
