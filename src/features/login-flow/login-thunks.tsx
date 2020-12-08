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
    console.log(loggedInUserInfo);
    if (loggedInUserInfo.type === "error") {
      dispatch(loginFailure(loggedInUserInfo.error));
    } else {
      dispatch(push("/home"));
      //dispatch(loginSuccess(loggedInUserInfo));
    }
  } catch (err) {
    // dispatch(loginFailure(err.toString()));
    console.log("In the catch block" + err.toString());
  }
};
