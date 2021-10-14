// Angular
import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from "rxjs";

// Services
import { PostDataService } from "./services/PostData.service";

// Models
import { PostData } from "./models/post-data";

@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.scss'],
})
export class PostsDataComponent implements OnInit {
  postsData$: Observable<PostData[]>;

  constructor(private postDataService: PostDataService) {}

  ngOnInit() {
    this.postsData$ = this.postDataService.getDataPosts();
  }
}
