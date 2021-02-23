import { Box, Grid } from "@material-ui/core"
import styled from "styled-components"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom";

export const SignUpPageContainer = styled(Grid) `
height: 100vh;
width: 100vw;
background: #172039 0% 0% no-repeat padding-box;
display: flex !important;
justify-content: center !important;
align-items: center !important;
`;

export const SignUpPageDiv = styled(Box) `
  width: 90vw;
  height: 90vh;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 20px #FFFFFF29;
  border-radius: 20px;
  opacity: 1;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`

export const SignUpMainGridContainer = styled(Grid) `
height : 90vh !important;
`;

export const AdaLogo = styled.img `
margin-left: 2rem !important;
  
`;

export const CardImageDiv = styled.div `
margin-left: 4rem; 
border-radius: 15px;
opacity: 1;
display: flex !important;
align-items: center !important;
justify-content: center !important;
height: 90% !important;
`;

export const CardImageEmptyDiv = styled.div `
`;

export const TitleImageDiv = styled.div `
justify-content: center !important;
display: flex !important;
align-items: center !important;
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

export const CieTitle = styled.h1`
  font-style: bold;
  text-align: center;
  font-size: 27px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export const SignUpFormGrid = styled(Grid) `
  justify-content: center !important;
  display: flex !important;
  align-items: center !important;
`

export const SignUpFormSubGrid = styled(Grid)`
width: 40vw;
height: 75vh;
background: #F0F3FC 0% 0% no-repeat padding-box;
border-radius: 15px;
opacity: 1;
display: flex !important;
justify-content: center !important;
align-items: center !important;
`;

export const SignUpForm = styled(Box)`
height: -webkit-fill-available;
margin-top: 2rem; 
align-items: center !important;
justify-content: center !important;
width: 85% !important;
`;

export const SignUpText = styled(Typography) `
color: #202C56 !important;
font-family: 'Roboto';
letter-spacing: 0px;
opacity: 1;
font-size: 45px !important;
font-weight:bolder;
`

export const SignUpSubText = styled(Typography) `
color: #202C56;
text-transform: uppercase;
opacity: 0.6;
font-family: 'Roboto';
font-size: 13px;
letter-spacing: 1.09px;
`;

export const SignUpTextField = styled(TextField) `
background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
margin-top: 1.5rem !important;
border-color: yellow !important;
`;


export const SignUpButton = styled(Button) `
  background: #4F62AA 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  margin-top: 1rem !important;
`;

export const ExistingUserParentDiv = styled.div `
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const ExistingUser = styled(Link) `
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