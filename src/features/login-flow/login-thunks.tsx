import { loginStart, loginSuccess, loginFailure } from "../login-flow";
import { login } from "../../services/login-service";

export const authenticate = (loginReqObject: any) => async (dispatch: any) => {
  try {
    dispatch(loginStart());
    const loggedInUserInfo = await login(loginReqObject);
    if (loggedInUserInfo.type === "error") {
      dispatch(loginFailure(loggedInUserInfo.error));
    } else {
      dispatch(loginSuccess(loggedInUserInfo));
    }
  } catch (err) {
    // dispatch(loginFailure(err.toString()));
    console.log("In the catch block" + err.toString());
  }
};
