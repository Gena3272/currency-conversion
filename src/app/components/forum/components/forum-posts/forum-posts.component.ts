// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// Models
import { forumPost } from "../../Models/forum-post";

// Services
import { ForumService } from "../../services/forum.service";

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.scss'],
})
export class ForumPostsComponent implements OnInit {
  forumPosts: forumPost[];

  constructor(
    private forumService: ForumService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.preLoadingForumPosts();
  }

  private preLoadingForumPosts(): void {
    this.activatedRoute.data.subscribe((parameter) => {
      this.forumPosts = parameter.forumPosts;
    }).unsubscribe();
  }
}
