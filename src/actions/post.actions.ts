import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios.config";
import CreatePostPayload from "../models/posts/create-post-payload.model";
import Post from "../models/posts/post.model";
import PostsGetReturn from "../models/posts/posts-get-return.model";

const addPost = createAction<Post>("[POSTS] ADD_POST");

const editPost = createAsyncThunk<
  void,
  { id: string; title: string; content: string }
>("[POSTS] EDIT_POST", async ({ id, title, content }, { dispatch }) => {
  await axios.patch(`/careers/${id}/`, { title, content });

  dispatch(fetchPosts({}));
});

const deletePost = createAsyncThunk<void, { id: string }>(
  "[POSTS] DELETE_POST",
  async ({ id }, { dispatch }) => {
    await axios.delete(`/careers/${id}/`);

    dispatch(fetchPosts({}));
  }
);

const createPost = createAsyncThunk<void, CreatePostPayload>(
  "[POSTS] CREATE_POST",
  async (post, { dispatch }) => {
    await axios.post<Post>("/careers/", post);

    dispatch(fetchPosts({}));
  }
);

const fetchPosts = createAsyncThunk<PostsGetReturn, { offset?: number }>(
  "[POSTS] FETCH_POSTS",
  async ({ offset = 0 }, thunkApi) => {
    const response = await axios.get<PostsGetReturn>("/careers/", {
      params: {
        limit: 10,
        offset,
      },
    });
    const { data } = response;

    return data;
  }
);

export { addPost, fetchPosts, editPost, deletePost, createPost };
