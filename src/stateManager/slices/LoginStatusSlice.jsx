import { createSlice } from "@reduxjs/toolkit";

export const LoginStatusSlice = createSlice({
  name: "LoginInfo",
  initialState: {
    loginStatus: false,
    loggedInUserObject: {},
  },

  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },
    setLoggedInUserObject: (state, action) => {
      state.loggedInUserObject = action.payload;
    },
  },
});

export const selectLoginStatus = (state) => state.LoginInfo.loginStatus;
export const selectLoggedInUserObject = (state) =>
  state.LoginInfo.loggedInUserObject;

export const { setLoginStatus, setLoggedInUserObject } =
  LoginStatusSlice.actions;
export default LoginStatusSlice.reducer;
