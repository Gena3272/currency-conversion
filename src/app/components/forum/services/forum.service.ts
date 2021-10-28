// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJs
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

// Models
import { forumPost } from "../Models/forum-post";

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  forumPosts$ = new BehaviorSubject<forumPost[]>([]);

  constructor(private http$: HttpClient) {}

  getForumPosts(): Observable<forumPost[]> {
    return this.http$.get<forumPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((forumPosts) => this.forumPosts$.next(forumPosts)),
      )
  }
}
