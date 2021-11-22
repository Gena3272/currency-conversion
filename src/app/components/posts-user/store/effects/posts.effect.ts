// Angular
import { Injectable } from "@angular/core";

// RxJs
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

// Store
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { fetchPostsList, fetchPostsListError, fetchPostsListSuccess } from "../actions/posts.action";

// Services
import { PostsService } from "../../services/posts.service";

@Injectable()
export class postsEffect {
  fetchPostsList$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(fetchPostsList),
          switchMap(() => this.postsService.getPostsList()
            .pipe(
              map(postsList => fetchPostsListSuccess({postsList})),
              catchError(() => of(fetchPostsListError))),
          ),
        );
    }
  )

  constructor (
    private actions$: Actions,
    private postsService: PostsService,
  ) {}
}
