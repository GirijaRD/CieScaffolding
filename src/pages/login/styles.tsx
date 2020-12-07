import styled from "styled-components";
import { Row, Col, FormLabel, FormGroup, FormControl } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import CoverImage from "../../assets/images/cover_image.png";
export const Button = styled.button<{ buttonColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 3rem;
  color: white;
  font-size: 1rem;
  background-color: #fdb934;
  border-radius: 3px;
  cursor: pointer;
  transition: filter 0.3s;
  border: none;
  float: right;
  /* 
  &:hover {
    background-color: blue !important;
  } */
`;

export const CustomButton = styled(Button)`
  font-size: 0.3rem;
`;
export const LoginPageContainer = styled(Row)`
  height: 100vh;
  /* /overflow: hidden; */
`;

export const InfoDiv = styled(Col)`
  background-image: url("${CoverImage}");
`;

export const AppLogo = styled.div`
  background-image: url("${Logo}");
`;

export const LoginForm = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12%;
`;

export const CieTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

export const CieTitleName = styled.p`
  margin-top: 10%;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: default;
  color: white !important;
  margin-left: 13%;
`;

export const CieSubParagraph = styled.div`
  font-size: 1.15rem;
  font-weight: 200;
  cursor: default;
  color: white !important;
  margin-left: 13%;
`;

export const SignInTitle = styled.div`
  color: #121212;
  font-size: 2rem;
  font-weight: 500;
  cursor: default;
`;
export const SignInSubPagragraph = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  color: #afafaf;
  font-size: 1.2rem;
  cursor: default;
`;

export const UsernameLabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const CieFooter = styled(CieSubParagraph)``;

export const LoginFormLabel = styled(FormLabel)`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const LoginFormPasswordLabel = styled(FormGroup)`
  justify-content: space-between;
`;

export const Image = styled.image<{ src: string }>`
  margin-left: 5rem;
`;

export const ForgotPasswordLink = styled.a<{ href: string }>`
  color: #afafaf;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s;
  float: right !important;
  &:hover {
    color: #afafaf !important;
  }
`;

export const LoginPageTextBox = styled(FormControl)`
  &:hover {
    border-color: #fdb934 !important;
  }
  input:-webkit-autofill {
    border-color: #fdb934 !important;
  }

  &:focus,
  &:active {
    // border: none;
    box-shadow: none;
    border-color: #fdb934 !important;
  }
`;
