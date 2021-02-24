//import { loginStart, loginSuccess, loginFailure } from "../login-flow";
import { loginStart, loginFailure, loginSuccess, logout } from ".";
import { authService } from "../../services/login-service";
import { push } from "connected-react-router";
import {all , cancelled, put, takeLatest} from 'redux-saga/effects'
function* authenticate({payload}:any){
  try{
    yield put(loginStart());
    const token = yield authService(payload);
    console.log("token",token)
    if(token){
      yield put(loginSuccess(token));
      yield put(push("/consumer"));
    }
  }catch(e){
    console.log("login error",e)
    yield put(loginFailure(e.toString()));
    yield put(logout())
  }finally{
    if(yield cancelled())
      console.log("authentication cancelled");
  }
}
export default function * LoginSaga(){
  yield all([
    takeLatest("LOGIN",authenticate),
  ])
}