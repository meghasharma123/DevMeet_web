import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import feedReducers from "./feedSlice";

export const store = configureStore({
  reducer: {
    user: userReducers,
    feed: feedReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
