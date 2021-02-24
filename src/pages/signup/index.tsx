import React, { ReactElement } from "react";
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
  );
}
export default SignUp;
