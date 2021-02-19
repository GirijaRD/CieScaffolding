import React, { ReactElement } from "react";
import { connect } from "react-redux";
import {
  LoginFormGrid,
  MainContainer,
  IntroContainer,
  MainGrid,
  IntroGridView,
} from "../../components/Common/styles";
import SignUpFormComponent from "../../components/SignUpFormComponent/Index";
import IntroTextComponent from "../../components/IntroTextComponent";

interface LoginProps {}
interface DispatchProps {}
type Props = LoginProps & DispatchProps;

function SignUp(props: Props): ReactElement {
  return (
    <MainContainer>
      <IntroContainer>
        <MainGrid container>
          <IntroGridView item lg={6} sm={12} md={6}>
            <IntroTextComponent />
          </IntroGridView>
          <LoginFormGrid item lg={6} sm={12} md={6}>
            <SignUpFormComponent />
          </LoginFormGrid>
        </MainGrid>
      </IntroContainer>
    </MainContainer>
  );
}
export default connect()(SignUp);
