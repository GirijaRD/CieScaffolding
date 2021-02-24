import { combineReducers } from "@reduxjs/toolkit";
//import reducer from '../features/login-flow'
import { connectRouter } from "connected-react-router";
import history from "./history";
import LoginReducer from "../slices/LoginSlice";

const rootReducer = combineReducers({
  login: LoginReducer,
  router: connectRouter(history),
});

export default rootReducer;
