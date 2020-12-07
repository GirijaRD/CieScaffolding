import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loggedInUserInitialState from "./login-initial-state";

export const loggedInUser = createSlice({
  name: "loggedInUser",
  initialState: loggedInUserInitialState,
  reducers: {
    loginStart: startLoading,
    loginSuccess: loadingSuccess,
    loginFailure: loadingFailed,
    resetLoginState: resetLoginState,
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

function resetLoginState(state: any, action: any) {
  state.loggedInUser = loggedInUserInitialState.loggedInUser;
  state.isLoading = false;
  state.error = null;
}
