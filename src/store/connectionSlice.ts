import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/User";

type UserState = UserType[] | null;

const initialState = null as UserState;

export const connectionSlice = createSlice({
  name: "connections",
  initialState,
  reducers: {
    addConnections: (_, action) => action.payload,
    removeConnections: () => null,
  },
});

export const { addConnections, removeConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
