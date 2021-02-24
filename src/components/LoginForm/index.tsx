import { Box, InputAdornment } from "@material-ui/core";
import React, { RefObject, createRef, ReactElement } from "react";
import {
  LoginSubForm,
  SignInText,
  EnterMailText,
  TextDetails,
} from "../FormStyles/formstyles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { EmailValidation } from "../helperMethods/validations";
import InputTextField from "components/InputTextField";
import FormButton from "components/FormButton";
import AuthLink from "components/AuthLink";
import EmailIcon from "components/Icons/AuthIcons/EmailIcon";
import PasswordIcon from "components/Icons/AuthIcons/PasswordIcon";
import { loginApiCall } from "../../thunks/login-thunk";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  // login: (obj: object) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {},
    },
  })
);

function LoginForm(props: Props): ReactElement {
  let nameRef: RefObject<HTMLInputElement> = createRef();
  const passwordRef: RefObject<HTMLInputElement> = createRef();
  const classes = useStyles();
  const [errorUserName, setErrorUserName] = React.useState("");

  const getLoading = useSelector((state: any) => state.login.loading);

  React.useEffect(() => {
    console.log("LOADING", getLoading);
  }, []);

  // const { login } = props;
  const dispatch = useDispatch();

  function onClickHandler(e: React.MouseEvent<any, any>): void {
    e.preventDefault();
    const username = nameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(nameRef.current?.value, nameRef.current?.nodeValue);
    console.log(username, password);
    dispatch(loginApiCall({ username, password }));

    // console.log("In the login:" + JSON.stringify(history));
  }

  function handleValidations() {
    const email = nameRef.current?.value;
    if (email === "") {
      setErrorUserName("please Enter the Email");
    } else if (email && !EmailValidation(email)) {
      setErrorUserName("Invalid Email");
    } else {
      setErrorUserName("");
    }
  }

  return (
    <LoginSubForm item>
      <Box>
        <TextDetails>
          <SignInText variant="h4">Login</SignInText>
          <EnterMailText>Enter your Email and Password</EnterMailText>
        </TextDetails>
        <form className={classes.root}>
          <InputTextField
            error={errorUserName !== "" ? true : false}
            placeholder="Email"
            size="small"
            variant="outlined"
            helperText={errorUserName}
            fullWidth
            onBlur={handleValidations}
            disabled={getLoading}
            inputRef={nameRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          ></InputTextField>
          <InputTextField
            placeholder="Password"
            type="password"
            size="small"
            variant="outlined"
            fullWidth
            disabled={getLoading}
            inputRef={passwordRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          ></InputTextField>
          <AuthLink
            title="Forgot Password?"
            to="/home"
            style={{ float: "right", margin: "10px 0px" }}
          />
          <FormButton
            title="Login"
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClickHandler}
            loading={getLoading}
          />
          <div style={{ marginTop: "20px" }}>
            <AuthLink to="/signup" title="New User? Create an account now" />
          </div>
        </form>
      </Box>
    </LoginSubForm>
  );
}

export default LoginForm;
