// Angular
import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from "rxjs";

// Store
import {  Store } from "@ngrx/store";
import { fetchPostsList } from "../../store/actions/posts.action";
import { selectAllPosts } from "../../store/selectors/posts.selector";
import { AppState } from "../../../store";
import { Post } from "../../store/redusers/posts.reduser";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  postsList$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fetchPostsList());
    this.postsList$ = this.store.select(selectAllPosts);
  }
}
