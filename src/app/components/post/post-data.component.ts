// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// RxJs
import { Observable } from "rxjs";

// Services
import { PostDataService } from "../posts/services/PostData.service";

// Models
import { PostData } from "../posts/models/post-data";

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  postData$: Observable<PostData>;

  constructor(
    private postDataService: PostDataService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.showPostById();
  }

  private showPostById(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      this.postDataService.currentPostId$.next(+parameter.id);

      this.postData$ = this.postDataService.getCurrentPostId();
    });
  }
}
