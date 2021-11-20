// Store
import { createSelector } from "@ngrx/store";
import { AppState } from "../../../store";
import { Post } from "../redusers/posts.reduser";

export const selectPosts = (state: AppState) => state.posts;

export const selectAllPosts = createSelector(
  selectPosts,
  (posts): Post[] => posts.postsList,
);

export const selectCurrentPostById = (id: number) => createSelector(
  selectAllPosts,
  (posts): Post => {
    return posts ? posts.find((post) => post.id === id) : null;
  },
);
