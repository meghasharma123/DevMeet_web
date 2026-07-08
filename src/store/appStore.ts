import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import feedReducers from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestSlice from "./requestSlice";

export const store = configureStore({
  reducer: {
    user: userReducers,
    feed: feedReducers,
    connections: connectionReducer,
    requests: requestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
