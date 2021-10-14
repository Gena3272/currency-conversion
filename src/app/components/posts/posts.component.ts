// Angular
import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from "rxjs";

// Services
import { PostService } from "./services/post.service";

// Models
import { Post } from "./models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
