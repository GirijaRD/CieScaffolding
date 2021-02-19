import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";
import { colors } from "../Common/colors";

interface PropsButton extends ButtonProps {
  title: string;
}

export const StyledButton = styled(Button)`
  background: ${colors.buttonblue};
  border-radius: 5px;
  margin-top: 15px !important;
`;

const FormButton: React.FC<PropsButton> = ({ title, ...props }) => {
  return <StyledButton {...props}>{title}</StyledButton>;
};

export default FormButton;
