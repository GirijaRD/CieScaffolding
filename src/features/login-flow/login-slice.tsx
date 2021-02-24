import { createSlice } from "@reduxjs/toolkit";
import loggedInUserInitialState from "./login-initial-state";

export const loggedInUser = createSlice({
  name: "loggedInUser",
  initialState: loggedInUserInitialState,
  reducers: {
    loginStart: startLoading,
    loginSuccess: loadingSuccess,
    loginFailure: loadingFailed,
    logout: resetLoginState,
    login,
  },
});

function startLoading(state: any) {
  state.isLoading = true;
}

function loadingFailed(state: any, action: any) {
  state.loggedInUser.error = action.payload;
  state.isLoading = false;
  state.error = action.payload.message ? action.payload.message : "";
}

function loadingSuccess(state: any, action: any) {
  state.loggedInUser = action.payload;
  state.isLoading = false;
  state.error = null;
}

function resetLoginState(state: any) {
  console.log("reset");
  state = { ...loggedInUserInitialState };
  state.error = null;
  return state;
}

function login(state: any, action: any) {
  startLoading(state);
}
