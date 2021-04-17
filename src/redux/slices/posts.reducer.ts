import { createReducer } from "@reduxjs/toolkit";
import {
  addPost,
  createPost,
  deletePost,
  editPost,
  fetchPosts,
} from "../../actions/post.actions";
import Post from "../../models/posts/post.model";

let initialState = {
  status: "idle",
  next: "",
  previous: "",
  posts: [] as Post[],
};

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload;

      state.posts.push(post);

      return state;
    })
    .addCase(editPost.fulfilled, () => {})
    .addCase(fetchPosts.pending, (state, _) => {
      state.status = "loading";

      return state;
    })
    .addCase(fetchPosts.fulfilled, (state, { payload }) => {
      const { results: posts, ...pagesData } = payload;
      state = {
        ...state,
        posts,
        ...pagesData,
        status: "loaded",
      };

      return state;
    });
});

export default postsReducer;
