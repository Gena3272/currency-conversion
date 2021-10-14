// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJs
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

// Models
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root',
})
export class PostService {
  Posts$ = new BehaviorSubject<Post[]>([]);
  currentPostId$ = new BehaviorSubject<number>( null);

  constructor(private http$: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http$.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((posts) => this.Posts$.next(posts)),
      )
  }

  getCurrentPostById(): Observable<Post> {
    return this.Posts$
      .pipe(
        map(post => post.find((post: Post) => {
          return post.id === this.currentPostId$.value;
        })),
      )
  }
}
