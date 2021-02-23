import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import LoginForm from "../../components/LoginForm";
import AuthWrapper from "components/AuthWrapper";

interface LoginProps {}
interface DispatchProps {
  login: (obj: object) => void;
}
type Props = LoginProps & DispatchProps;

function Login(props: Props): ReactElement {
  const { login } = props;
  // alert toast are required
  return (
    <AuthWrapper>
      <LoginForm login={login} />
    </AuthWrapper>
  );
}
//useSelector hooks
function mapStateToProps(): LoginProps {
  return {};
}
//useDispatch
function mapDispatchToProps(
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps {
  return {
    login: (obj: object) => {
      dispatch({
        type: "LOGIN",
        payload: obj,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
