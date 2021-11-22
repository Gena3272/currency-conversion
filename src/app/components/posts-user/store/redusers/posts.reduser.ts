// Store
import { createReducer, on } from "@ngrx/store";
import { fetchPostsListSuccess } from "../actions/posts.action";

// Constants
import { Post } from "../../constants/constants";

export interface PostsState {
  postsList: Post[];
}

export const initialPostsListState: PostsState = {
  postsList: null,
}

export const postsListReducer = createReducer(
  initialPostsListState,
  on(fetchPostsListSuccess, (state, { postsList }) => ({...state, postsList})),
)
