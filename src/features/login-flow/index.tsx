import { loggedInUser } from "./login-slice";
import LoginSaga from './login-sagas'
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  login,
} = loggedInUser.actions;

export default loggedInUser.reducer;

export {LoginSaga};
