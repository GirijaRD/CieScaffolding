import React from "react";
import styled from "styled-components";
import { TextField, TextFieldProps } from "@material-ui/core";

const EmailTextBox = styled(TextField)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  margin-top: 1.5rem !important;
  .MuiFormHelperText-root {
    margin: 0 !important;
    background: #f0f3fc;
    padding-top: 5px;
    padding-left: 10px;
  }
`;

const InputTextField: React.FC<TextFieldProps> = (props) => {
  return <EmailTextBox {...props} />;
};

export default InputTextField;
