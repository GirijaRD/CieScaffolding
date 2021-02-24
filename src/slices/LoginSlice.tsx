import { createSlice } from "@reduxjs/toolkit";
import LoggedInUserInitialState from "../initialStates/AuthStates/LoginInitialState";
import { toast } from "react-toastify";
import { loginApiCall } from "../thunks/login-thunk";

const handleLogOut = (state: any) => {
  console.log("LOGOUT");
  state.loggedInUser = {
    token: "",
    users: null,
  };
  state.error = "";
  state.loading = false;
};

const LoginSlice = createSlice({
  name: "login",
  initialState: LoggedInUserInitialState,
  reducers: {
    logout: handleLogOut,
  },
  extraReducers: (builder) => {
    builder.addCase(loginApiCall.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error("Invalid Credentials");
    });
    builder.addCase(loginApiCall.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.loggedInUser = action.payload;
      toast.success("Logged IN");
    });
    builder.addCase(loginApiCall.pending, (state: any, action: any) => {
      console.log("PENDING");
      state.loading = true;
    });
  },
});

export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
