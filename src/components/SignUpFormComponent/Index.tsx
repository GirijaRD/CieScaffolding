import React, { ChangeEvent } from "react";
import { Box } from "@material-ui/core";
import {
  LoginSubForm,
  SignInText,
  EnterMailText,
  TextDetails,
} from "../Common/formstyles";
import { makeStyles } from "@material-ui/core/styles";
import InputTextField from "components/InputTextField";
import { EmailValidation, NameValidation } from "../helperMethods/validations";
import FormButton from "components/FormButton";
import CieAuthLink from "components/CieAuthLink";

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
  ): any => {
    //name validation
    if (validationName === "name") {
      if (NameValidation(validationValue)) {
        setErrors({ ...errors, name: "Name Should be atleast 4 letters" });
        return false;
      } else {
        setErrors({ ...errors, name: "" });
        return true;
      }
    }

    //email validation
    if (validationName === "email") {
      if (!EmailValidation(validationValue)) {
        setErrors({ ...errors, email: "Invalid Email" });
        return false;
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
        return false;
      } else {
        setErrors({ ...errors, password: "" });
        return true;
      }
    }

    //repassword
    if (validationName === "repassword") {
      if (validationValue !== data.password) {
        setErrors({ ...errors, repassword: "Password doesn't Match" });
        return false;
      } else {
        setErrors({ ...errors, repassword: "" });
        return true;
      }
    }
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
            //           // InputProps={{
            //           //   startAdornment: (
            //           //     <InputAdornment position="start">
            //           //       <AccountCircle />
            //           //     </InputAdornment>
            //   ),
            //}}
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
            className={classes.root}
          />
          <FormButton
            title="Confirm"
            variant="contained"
            color="primary"
            fullWidth
          />
          <div style={{ marginTop: "20px" }}>
            <CieAuthLink
              to="/login"
              title=" Already have an account? Click here to Log In!"
            />
          </div>
        </form>
      </Box>
    </LoginSubForm>
  );
}
