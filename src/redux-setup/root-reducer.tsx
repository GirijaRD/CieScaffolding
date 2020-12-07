import { combineReducers } from "@reduxjs/toolkit";
import loggedInUser from "../features/login-flow";

const rootReducer = combineReducers({
  loggedInUserInfo: loggedInUser,
});

export default rootReducer;
