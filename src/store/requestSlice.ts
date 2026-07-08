import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/User";

type UserState = UserType[] | null;

const initialState = null as UserState;

export const RequestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequests: (_, action) => action.payload,
    removeRequests: () => null,
  },
});

export const { addRequests, removeRequests } = RequestSlice.actions;
export default RequestSlice.reducer;
