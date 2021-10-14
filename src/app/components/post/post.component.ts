// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// RxJs
import { Observable } from "rxjs";

// Services
import { PostService } from "../posts/services/post.service";

// Models
import { Post } from "../posts/models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post$: Observable<Post>;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.showPostById();
  }

  private showPostById(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.postService.currentPostId$.next(+parameter.id);
      this.post$ = this.postService.getCurrentPostById();
    });
  }
}
