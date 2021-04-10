import { createReducer } from "@reduxjs/toolkit";
import { addPost, createPost, deletePost } from "../../actions/post.actions";
import Post from "../../models/posts/post.model";

let initialState = {
  status: "idle",
  posts: [] as Post[],
};

const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const post = action.payload;

      state.posts.push(post);
    })
    .addCase(deletePost, (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
});

export default postsReducer;
