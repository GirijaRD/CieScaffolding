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
// eslint-disable-next-line no-empty-pattern

function Login(props: Props): ReactElement {
  const { login } = props;

  return (
    <AuthWrapper>
      <LoginForm login={login} />
    </AuthWrapper>
    // <MainContainer>
    //   <IntroContainer>
    //     <MainGrid container>
    //       <IntroGridView item lg={6} sm={12} md={6}>
    //         <IntroTextComponent />
    //       </IntroGridView>
    //       <LoginFormGrid item lg={6} sm={12} md={6}>
    //         <LoginForm login={login} />
    //       </LoginFormGrid>
    //     </MainGrid>
    //   </IntroContainer>
    // </MainContainer>
  );
}
function mapStateToProps(): LoginProps {
  return {};
}
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
