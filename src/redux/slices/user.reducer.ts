import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "../../actions/user.actions";

const initialState = {
  isLoggedIn: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    state.isLoggedIn = true;
  });
});

export default userReducer;
