// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// RxJs
import { Observable } from "rxjs";

// Constants
import { Post } from "../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http$: HttpClient) {}

  getPostsList(): Observable<Post[]> {
    return this.http$.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
