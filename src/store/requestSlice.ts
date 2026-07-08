import { createSlice } from "@reduxjs/toolkit";
import { RequestsType } from "../types/Requests";

type UserState = RequestsType[] | null;

const initialState = null as UserState;

export const RequestSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequests: (_, action) => action.payload,
    removeRequests: (state,action) => {
      const filteredVal = state?.filter((r) => r._id !== action.payload);
      return filteredVal;
    },
  },
});

export const { addRequests, removeRequests } = RequestSlice.actions;
export default RequestSlice.reducer;
