import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { colors } from "../Common/colors";

export const LoginSubForm = styled(Grid)`
  background: #f0f3fc;
  min-height: 90%;
  width: 80%;
  padding: 7%;
  border-radius: 10px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const SignInText = styled(Typography)`
  color: #202c56 !important;
  font-size: 3.25rem !important;
`;

export const ForgetPasswordParentLink = styled.div``;

export const ForgetPasswordLink = styled(Link)`
  margin-top: 1rem !important;
  color: #202c56 !important;
  font-family: "Roboto";
  float: right !important;
`;

export const LoginButton = styled(Button)`
  background: #4f62aa 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  margin-top: 1rem !important;
`;

export const CreateNewUserParentDiv = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const CreateNewUser = styled(Link)`
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  text-decoration: underline;
  font: Roboto;
  letter-spacing: 0px;
  color: #202c56;
  opacity: 1;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const EnterMailText = styled(Typography)`
  letter-spacing: 1.38px;
  color: ${colors.fontgrey};
  text-transform: uppercase;
  opacity: 0.6;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;
export const TextDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`;
