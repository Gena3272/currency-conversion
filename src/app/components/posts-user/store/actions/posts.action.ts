// Store
import { createAction, props } from "@ngrx/store";
import { Post } from "../redusers/posts.reduser";

export const fetchPostsList = createAction(
  '[Posts] Fetch posts list',
);

export const fetchPostsListSuccess = createAction(
  '[Posts] Fetch Posts success',
  props<{ postsList: Post[] }>(),
);

export const fetchPostsListError = createAction(
  '[Posts] Fetch posts error',
);
