import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonProps } from "@material-ui/core/Button";
import styled from "styled-components";
import { colors } from "../Common/colors";
import { CircularProgress } from "@material-ui/core";

interface PropsButton extends ButtonProps {
  title: string;
  loading: boolean;
}

export const StyledButton = styled(Button)`
  background: ${colors.buttonblue};
  border-radius: 5px;
  margin-top: 15px !important;
`;

const FormButton: React.FC<PropsButton> = ({ title, loading, ...props }) => {
  return (
    <StyledButton {...props} disabled={loading}>
      {title}&nbsp;
      {loading && <CircularProgress size={20} />}
    </StyledButton>
  );
};

export default FormButton;
