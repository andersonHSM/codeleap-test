import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction<string>("[USER] SET_USER");
