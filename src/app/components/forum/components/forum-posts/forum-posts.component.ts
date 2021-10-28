// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// RxJs
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

// Models
import { ForumPost } from "../../Models/forum-post";

// Services
import { ForumService } from "../../services/forum.service";

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.scss'],
})
export class ForumPostsComponent implements OnInit {
  forumPosts$: Observable<ForumPost[]>;

  constructor(
    private forumService: ForumService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.preLoadingForumPosts();
  }

  private preLoadingForumPosts(): void {
    this.forumPosts$ =  this.activatedRoute.data.pipe(
      map(parameter => parameter.forumPosts),
    )
  }
}
