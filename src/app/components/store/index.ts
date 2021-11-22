// Store
import { postsListReducer, PostsState } from "../posts-user/store/redusers/posts.reduser";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  posts: PostsState,
}

export const appReducers: ActionReducerMap<AppState> = {
  posts: postsListReducer,
}
