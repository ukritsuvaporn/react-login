import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../app/view/loginForm";

export interface IUserState {
  token: string | null;
}

const initialState: IUserState = {
  token: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    removeToken: (state) => {
      sessionStorage.clear();
      state.token = null;
    },
    storeToken: (state: any, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { removeToken, storeToken } = userDataSlice.actions;

export default userDataSlice.reducer;
