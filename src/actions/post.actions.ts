import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import CreatePostPayload from "../models/posts/create-post-payload.model";
import Post from "../models/posts/post.model";

const addPost = createAction<Post>("[POSTS] ADD_POST");
const fetchPosts = createAction("[POSTS] FETCH_POSTS");
const editPost = createAction("[POSTS] EDIT_POST");
const deletePost = createAction<Pick<Post, "id">>("[POSTS] DELETE_POST");

const createPost = createAsyncThunk<Post, CreatePostPayload>(
  "[POSTS] CREATE_POST",
  async (post, _) => {
    const promise = new Promise<Post>((resolve, reject) => {
      if (true) return resolve(post as any);
    });

    const test = await promise;

    return test;
  }
);

export { addPost, fetchPosts, editPost, deletePost, createPost };
