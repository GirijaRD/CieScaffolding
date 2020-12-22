/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { createRef, ReactElement, RefObject, useContext } from "react";
import { connect } from "react-redux";
import { authenticate } from "../../features/login-flow";
import { useHistory, useLocation } from "react-router-dom";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Context } from "../../components/Logger";
import {
  Button,
  CustomButton,
  LoginPageContainer,
  LoginForm,
  InfoDiv,
  CieTitle,
  CieTitleName,
  CieSubParagraph,
  CieFooter,
  SignInTitle,
  SignInSubPagragraph,
  LoginFormPasswordLabel,
  LoginPageTextBox,
  ForgotPasswordLink,
} from "./styles";

import { Form, Image } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

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
    <div className="container-fluid">
      <LoginPageContainer>
        <InfoDiv md={5}>
          <div>
            <Image
              src={Logo}
              style={{ marginLeft: "4rem", marginTop: "1rem" }}
            />
          </div>
          <CieTitle>
            <CieTitleName>Consumer Insight explorer</CieTitleName>
            <CieSubParagraph>
              Better understand customer segments in terms of their location,
              demographics, wealth, life, stage, online and offline behavior
            </CieSubParagraph>
            <CieFooter>© 2020 ADA</CieFooter>
          </CieTitle>
        </InfoDiv>

        <LoginForm md={7}>
          <Form onSubmit={onClickHandler} style={{ width: "80%" }}>
            <SignInTitle>Sign In</SignInTitle>
            <SignInSubPagragraph>
              Enter your credentials to get access
            </SignInSubPagragraph>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <LoginPageTextBox
                type="text"
                ref={nameRef}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <LoginFormPasswordLabel>
                Password:
                <ForgotPasswordLink href="www.google.com">
                  Click here
                </ForgotPasswordLink>
                <LoginPageTextBox
                  type="password"
                  placeholder="password"
                  ref={passwordRef}
                />
              </LoginFormPasswordLabel>
            </Form.Group>

            <Button buttonColor={"#fdb934"} type="submit">
              Login
            </Button>
          </Form>
        </LoginForm>
      </LoginPageContainer>
    </div>
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
      dispatch(authenticate(obj));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
