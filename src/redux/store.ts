import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts.reducer";
import userReducer from "./slices/user.reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    postsReducer,
    userReducer,
  },
  middleware: [thunk],
});

export default store;
