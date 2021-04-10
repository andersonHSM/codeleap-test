import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "../../actions/user.actions";

const initialState = {
  isLoggedIn: false,
  username: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    state.isLoggedIn = true;
    state.username = action.payload;
  });
});

export default userReducer;
