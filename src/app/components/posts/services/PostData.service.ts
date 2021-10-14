// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJs
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

// Models
import { PostData } from "../models/post-data";

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  dataPosts$ = new BehaviorSubject<PostData[]>([]);
  currentPostId$ = new BehaviorSubject<number>( null);

  constructor(private http$: HttpClient) {}

  getDataPosts(): Observable<PostData[]> {
    return this.http$.get<PostData[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap((postsData) => this.dataPosts$.next(postsData)),
      )
  }

  getCurrentPostId(): Observable<PostData> {
    return this.dataPosts$
      .pipe(
        map(postData => postData.find((Post: PostData) => {
          return Post.id === this.currentPostId$.value;
        })),
      )
  }
}
