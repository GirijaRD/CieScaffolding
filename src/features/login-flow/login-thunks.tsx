//import { loginStart, loginSuccess, loginFailure } from "../login-flow";
import { AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { loginStart, loginFailure, loginSuccess } from ".";
import { login } from "../../services/login-service";
import { push } from "connected-react-router";
export const authenticate = (
  loginReqObject: any
): ThunkAction<Promise<void>, {}, {}, any> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    // dispatch(loginStart());
    const loggedInUserInfo = await login(loginReqObject);
    if (loggedInUserInfo.type === "error") {
      dispatch(loginFailure(loggedInUserInfo.error));
    } else {
      dispatch(loginSuccess(loggedInUserInfo));
      dispatch(push("/consumer"));
    }
  } catch (err) {
    // dispatch(loginFailure(err.toString()));
  }
};
