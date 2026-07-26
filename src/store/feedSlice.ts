import { createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../types/User";

type UserState = null | UserType[];

const initialState = null as UserState;

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (_, action) => action.payload,
    removeFeed: (state, action) => {
      const newFeed = state?.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
