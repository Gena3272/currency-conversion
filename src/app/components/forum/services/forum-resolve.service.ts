// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

// RxJS
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";

// Models
import { ForumPost } from "../Models/forum-post";

// Services
import { ForumService } from "./forum.service";

@Injectable({
  providedIn: 'root',
})
export class ForumResolveService implements Resolve<ForumPost[]> {

  constructor(private forumService: ForumService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ForumPost[]> {
    return this.forumService.getForumPosts().pipe(
      delay(3000),
    );
  }
}
