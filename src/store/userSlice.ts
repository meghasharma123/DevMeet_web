import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../types/User";

type UserState = UserType | null;
const initialState: UserState = null;

export const userSlice = createSlice<UserState>({
  name: "user",
  initialState,
  reducers: {
    addUser: (_, action: PayloadAction<UserType>) => action.payload,
    removeUser: () => null,
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
