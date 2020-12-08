import { loggedInUser } from "./login-slice";
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  resetLoginState,
} = loggedInUser.actions;

export default loggedInUser.reducer;

export { authenticate } from "./login-thunks";
