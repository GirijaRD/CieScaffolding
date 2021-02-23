import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
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
