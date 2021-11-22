// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// RxJs
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

// Store
import { Store } from "@ngrx/store";
import { AppState } from "../../../store";
import { selectCurrentPostById } from "../../store/selectors/posts.selector";

// Constants
import { Post } from "../../constants/constants";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject<void>();

  post$: Observable<Post>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.getCurrentPostByIdSubscriber();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getCurrentPostByIdSubscriber(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.unsubscribe$),
      ).subscribe((parameter) => {
        this.post$ = this.store.select(selectCurrentPostById(+parameter.id));
    });
  }
}
