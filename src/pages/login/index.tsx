/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { createRef, ReactElement, RefObject, useContext } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Context } from "../../components/Logger";
import {
  LoginPageContainer,
  CieTitle,
  CieSubParagraph,
  LoginPageDiv,
  CardDiv,
  LoginSubForm,
  SignInText,
  LoginForm,
  EmailTextBox,
  ForgetPasswordLink,
  ForgetPasswordParentLink,
  LoginButton,
  CreateNewUser,
  TitleImage,
  TitleImageDiv,
  CieTitleParentDiv,
  CieSubParagraphParentDiv,
  AdaLogo,
  LoginFormGrid,
  MainGridContainer,
  CreateNewUserParentDiv,
  EnterMailText,
} from "./styles";

import Logo from "../../assets/images/image (6).png";
import TitleImage1 from "../../assets/images/image (4).png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

interface LoginProps {}
interface DispatchProps {
  login: (obj: object) => void;
}
type Props = LoginProps & DispatchProps;
// eslint-disable-next-line no-empty-pattern

function Login(props: Props): ReactElement {
  const history = useHistory();
  const Logger = useContext(Context);
  let location = useLocation();
  const nameRef: RefObject<HTMLInputElement> = createRef();
  const passwordRef: RefObject<HTMLInputElement> = createRef();
  const { login } = props;
  function onClickHandler(e: React.MouseEvent<any, any>): void {
    e.preventDefault();
    const username = nameRef.current?.value;
    const password = passwordRef.current?.value;
    login({ username, password });
    // console.log("In the login:" + JSON.stringify(history));
  }
  return (
    <Box display="flex">
      <LoginPageContainer container>
        <LoginPageDiv>
          <MainGridContainer container item lg={12} md={12}>
            <Grid item lg={6} sm={6} md={6}>
              <AdaLogo src={Logo}></AdaLogo>
              <CardDiv>
                <div>
                  <TitleImageDiv>
                    <TitleImage src={TitleImage1} component="img" />
                  </TitleImageDiv>
                  <div>
                    <CieTitleParentDiv>
                      <CieTitle>Consumer Insights Explorer </CieTitle>
                    </CieTitleParentDiv>

                    <CieSubParagraphParentDiv>
                      <CieSubParagraph>
                        Better understand customer segments in terms of their
                        location, demographics, wealth, life, stage, online and
                        offline behavior
                      </CieSubParagraph>
                    </CieSubParagraphParentDiv>
                  </div>
                </div>
              </CardDiv>
            </Grid>

            {/* Login form grid */}
            <LoginFormGrid item lg={6} md={6} sm={6}>
              <LoginSubForm item xs="auto">
                <LoginForm>
                  <SignInText variant="h4">Login</SignInText>
                  <EnterMailText>Enter your Email and Password</EnterMailText>
                  <EmailTextBox
                    placeholder="Email"
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></EmailTextBox>
                  <EmailTextBox
                    placeholder="Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                  ></EmailTextBox>

                  <ForgetPasswordParentLink>
                    <ForgetPasswordLink to="/home">
                      Forget Password?
                    </ForgetPasswordLink>
                  </ForgetPasswordParentLink>
                  <div>
                    <LoginButton variant="contained" color="primary" fullWidth>
                      Login
                    </LoginButton>
                  </div>
                  <CreateNewUserParentDiv>
                    <CreateNewUser to="/home">
                      New User? Create an account now
                    </CreateNewUser>
                  </CreateNewUserParentDiv>
                </LoginForm>
              </LoginSubForm>
            </LoginFormGrid>
          </MainGridContainer>
        </LoginPageDiv>
      </LoginPageContainer>
    </Box>
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
        type:"LOGIN",
        payload:obj
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
