import { loggedInUser } from "./login-slice";
console.log(loggedInUser.reducer)
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  resetLoginState,
} = loggedInUser.actions;

export default loggedInUser.reducer;

export { authenticate } from "./login-thunks";
