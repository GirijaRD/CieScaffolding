import React, { ReactElement } from "react";
import { connect } from "react-redux";
import SignUpFormComponent from "../../components/SignUpFormComponent/Index";
import AuthWrapper from "components/AuthWrapper";

interface LoginProps {}
interface DispatchProps {}
type Props = LoginProps & DispatchProps;

function SignUp(props: Props): ReactElement {
  return (
    <AuthWrapper>
      <SignUpFormComponent />
    </AuthWrapper>
    // <MainContainer>
    //   <IntroContainer>
    //     <MainGrid container>
    //       <IntroGridView item lg={6} sm={12} md={6}>
    //         <IntroTextComponent />
    //       </IntroGridView>
    //       <LoginFormGrid item lg={6} sm={12} md={6}>
    //         <SignUpFormComponent />
    //       </LoginFormGrid>
    //     </MainGrid>
    //   </IntroContainer>
    // </MainContainer>
  );
}
export default connect()(SignUp);
