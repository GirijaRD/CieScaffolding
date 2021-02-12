import { loggedInUser } from "./login-slice";
import LoginSaga from './login-sagas'
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  resetLoginState,
} = loggedInUser.actions;

export default loggedInUser.reducer;

export {LoginSaga};
