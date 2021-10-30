// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJs
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

// Models
import { ForumPost } from "../Models/forum-post";

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  forumPosts$ = new BehaviorSubject<ForumPost[]>([]);

  constructor(private http$: HttpClient) {}

  getForumPosts(): Observable<ForumPost[]> {
    return this.http$.get<ForumPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((forumPosts) => this.forumPosts$.next(forumPosts)),
      )
  }
}
