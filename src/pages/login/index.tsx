import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  LoginFormGrid,
  MainContainer,
  IntroContainer,
  MainGrid,
  IntroGridView,
} from "../../components/Common/styles";
import LoginForm from "../../components/LoginForm";
import IntroTextComponent from "components/IntroTextComponent";

interface LoginProps {}
interface DispatchProps {
  login: (obj: object) => void;
}
type Props = LoginProps & DispatchProps;
// eslint-disable-next-line no-empty-pattern

function Login(props: Props): ReactElement {
  const { login } = props;

  return (
    <MainContainer>
      <IntroContainer>
        <MainGrid container>
          <IntroGridView item lg={6} sm={12} md={6}>
            <IntroTextComponent />
          </IntroGridView>
          <LoginFormGrid item lg={6} sm={12} md={6}>
            <LoginForm login={login} />
          </LoginFormGrid>
        </MainGrid>
      </IntroContainer>
    </MainContainer>
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
