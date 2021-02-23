import React, { ChangeEvent } from "react";
import { Box, InputAdornment } from "@material-ui/core";
import {
  LoginSubForm,
  SignInText,
  EnterMailText,
  TextDetails,
} from "../FormStyles/formstyles";
import { makeStyles } from "@material-ui/core/styles";
import InputTextField from "components/InputTextField";
import { EmailValidation, NameValidation } from "../helperMethods/validations";
import FormButton from "components/FormButton";
import AuthLink from "components/AuthLink";
import EmailIcon from "components/Icons/AuthIcons/EmailIcon";
import PasswordIcon from "components/Icons/AuthIcons/PasswordIcon";
import UserIcon from "components/Icons/AuthIcons/UserIcon";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important",
    },
  },
});

export default function SignUpFormComponent() {
  const classes = useStyles();
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const validateData = (
    validationName: string,
    validationValue: string
  ): boolean => {
    //name validation
    if (validationName === "name") {
      if (NameValidation(validationValue)) {
        setErrors({ ...errors, name: "Name Should be atleast 4 letters" });
      } else {
        setErrors({ ...errors, name: "" });
        return true;
      }
    }

    //email validation
    if (validationName === "email") {
      if (!EmailValidation(validationValue)) {
        setErrors({ ...errors, email: "Invalid Email" });
      } else {
        setErrors({ ...errors, email: "" });
        return true;
      }
    }

    //password
    if (validationName === "password") {
      if (validationValue.length <= 6) {
        setErrors({
          ...errors,
          password: "password should be atleast 6 char long",
        });
      } else {
        setErrors({ ...errors, password: "" });
        return true;
      }
    }

    //repassword
    if (validationName === "repassword") {
      if (validationValue !== data.password) {
        setErrors({ ...errors, repassword: "Password doesn't Match" });
      } else {
        setErrors({ ...errors, repassword: "" });
        return true;
      }
    }
    return false;
  };

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    if (validateData(e.target.name, e.target.value)) {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }

  return (
    <LoginSubForm item>
      <Box>
        <TextDetails>
          <SignInText variant="h4">Sign Up</SignInText>
          <EnterMailText>SignUp to Access our latest version</EnterMailText>
        </TextDetails>
        <form className={classes.root}>
          <InputTextField
            placeholder="Full name"
            size="small"
            name="name"
            variant="outlined"
            type="text"
            fullWidth
            error={errors.name !== "" ? true : false}
            helperText={errors.name}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserIcon />
                </InputAdornment>
              ),
            }}
            className={classes.root}
          />
          <InputTextField
            placeholder="Email"
            size="small"
            name="email"
            variant="outlined"
            type="email"
            error={errors.email !== "" ? true : false}
            helperText={errors.email}
            fullWidth
            onChange={handleChange}
            className={classes.root}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <InputTextField
            placeholder="Set Password"
            size="small"
            name="password"
            error={errors.password !== "" ? true : false}
            helperText={errors.password}
            variant="outlined"
            type="password"
            fullWidth
            onChange={handleChange}
            className={classes.root}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
          <InputTextField
            placeholder="Password"
            size="small"
            name="repassword"
            error={errors.repassword !== "" ? true : false}
            helperText={errors.repassword}
            variant="outlined"
            type="password"
            fullWidth
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
            className={classes.root}
          />
          <FormButton
            title="Confirm"
            variant="contained"
            color="primary"
            fullWidth
            loading={false}
          />
          <div style={{ marginTop: "20px" }}>
            <AuthLink
              to="/login"
              title=" Already have an account? Click here to Log In!"
            />
          </div>
        </form>
      </Box>
    </LoginSubForm>
  );
}
