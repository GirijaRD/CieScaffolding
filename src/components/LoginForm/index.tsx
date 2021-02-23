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

interface Props {
  login: (obj: object) => void;
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
  const [loading, setLoading] = React.useState(false);

  const { login } = props;

  function onClickHandler(e: React.MouseEvent<any, any>): void {
    e.preventDefault();
    const username = nameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(nameRef.current?.value, nameRef.current?.nodeValue);
    console.log(username, password);
    setLoading(true);
    login({ username, password });
    setLoading(false);
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
            disabled={loading}
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
            disabled={loading}
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
            loading={loading}
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