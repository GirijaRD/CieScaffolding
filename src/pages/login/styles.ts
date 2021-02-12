import styled from "styled-components";
import { Row, Col, FormLabel, FormGroup, Image } from "react-bootstrap";

import CoverImage from "../../assets/images/cover_image.png";

import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid"
import { Box } from "@material-ui/core";

export const LoginPageContainer = styled(Grid)`

height: 100vh;
width: 100vw;
background: #172039 0% 0% no-repeat padding-box;
display: flex !important;
justify-content: center !important;
align-items: center !important;
`;

export const LoginPageDiv = styled(Box)`
  width: 90vw;
  height: 90vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 20px #FFFFFF29;
  border-radius: 20px;
  opacity: 1;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

export const MainGridContainer = styled(Grid) `
height : 90vh !important;
`;

export const ImageDiv = styled(Col) `
`;

export const AppLogo = styled.div`
 margin-left: 4rem; 
 margin-top: 1rem;  
`;

export const CardDiv = styled.div`
margin-left: 4rem; 
border-radius: 15px;
opacity: 1;
display: flex !important;
align-items: center !important;
justify-content: center !important;
height: 90% !important
`;

export const AdaLogo = styled.img `
margin-left: 2rem !important;
`;

export const TitleImage = styled(CardMedia)<{ component: string }> `
width: 25vw !important;
`;

export const CieTitleParentDiv = styled.div `
display: flex !important;
align-items: center !important;
justify-content: center !important;
`;

export const CieSubParagraphParentDiv = styled.div `
display: flex !important;
align-items: center !important;
justify-content: center !important;
`;

export const TitleImageDiv = styled.div `
justify-content: center !important;
display: flex !important;
align-items: center !important;
`;

export const LogoParentImageDiv = styled.div`
  height: 2vh;
  width: 13vw;
  margin-left: 1rem;
`;

  export const LoginSubForm = styled(Grid)`
  width: 40vw;
  height: 75vh;
  background: #F0F3FC 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  `;

export const LoginFormGrid = styled(Grid) `
  justify-content: center !important;
  display: flex !important;
  align-items: center !important;
`

export const LoginBox = styled.div `
  top: 5rem;
  margin-left: 2rem;
  width: 30rem;
  height: 20rem;
  opacity: 1;
  padding-top: 7rem;
`;


export const LoginButton = styled(Button) `
  background: #4F62AA 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  margin-top: 1rem !important;
`;

export const CreateNewUserParentDiv = styled.div `
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const CreateNewUser = styled(Link) `
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  text-decoration: underline;
  font: Roboto ;
  letter-spacing: 0px;
  color: #202C56;
  opacity: 1;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const CieTitle = styled.h1`
  font-style: bold;
  text-align: center;
  font-size: 27px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
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
  text-align: center;
  font-style: bold;
  font-size: 17px;
  letter-spacing: 0px;
  color: #202C56;
  opacity: 1;
  margin-top: 2rem;
  width: 24rem;
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

export const ImageContentGrid = styled(Grid) `
display: flex !important;
justify-content: center !important;
align-items: center !important;
`;


export const LoginForm = styled(Box)`

`;

export const SignInText = styled(Typography) `
 color: #202C56 !important;
 font-family: 'Roboto';
`
export const EnterMailText = styled(Typography) `

letter-spacing: 1.38px;
color: #202C56;
text-transform: uppercase;
opacity: 0.6;
font-family: 'Roboto';
font-size: 13px;
`

export const EmailTextBox = styled(TextField) `
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
margin-top: 1.5rem !important;
`;

export const ForgetPasswordParentLink = styled.div `

`;

export const ForgetPasswordLink = styled(Link) `
margin-top: 1rem !important;
color: #202C56 !important;
font-family: 'Roboto';
float: right !important;
`


export const LoginPageTextBox = styled(FormControl)`
  &:hover {
    border-color: #fdb934 !important;
  }
  input:-webkit-autofill {
    border-color: #fdb934 !important;
  }

  &:focus,
  &:active {

    box-shadow: none;
    border-color: #fdb934 !important;
  }
`;

