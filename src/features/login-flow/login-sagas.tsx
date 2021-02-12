//import { loginStart, loginSuccess, loginFailure } from "../login-flow";
import { loginStart, loginFailure, loginSuccess, resetLoginState } from ".";
import { login } from "../../services/login-service";
import { push } from "connected-react-router";
import {all , cancelled, put, takeLatest} from 'redux-saga/effects'
function* authenticate({payload}:any){
  try{
    console.log(`payload ${JSON.stringify(payload)}`);
    console.log(loginStart(),loginSuccess(""));
    yield put(loginStart());
    const token = yield login(payload);
    console.log("token",token)
    if(token){
      yield put(loginSuccess(token));
      yield put(push("/consumer"));
    }
  }catch(e){
    yield put(loginFailure(e.toString()));
    yield put(resetLoginState())
  }finally{
    if(yield cancelled())
      console.log("authentication cancelled");
  }
}
function* Logout(){
  try{
    yield put(resetLoginState());
  }catch(e){

  }
}
export default function * LoginSaga(){
  yield all([
    takeLatest("LOGIN",authenticate),
    takeLatest("LOGOUT",Logout)
  ])
}