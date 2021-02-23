import styled from "styled-components";

import { AppBar,  Grid,  Typography } from "@material-ui/core";
import Menu from "@material-ui/core/Menu"
import { Link } from "react-router-dom";
import  Button  from "@material-ui/core/Button"; 

export const CieHeader = styled(AppBar)`
top: 0px;
left: 0px;
width: 100%;
height: 3rem;
background: #172039 0% 0% no-repeat padding-box;
opacity: 1;
flex-grow: 1;
`;

export const AdaLogo = styled.img `
margin-left: 2rem !important;

display: flex;
justify-content: left;
align-self: baseline;
`;


export const MainHeaderGrid = styled(Grid) `
display: flex !important;
justify-content: space-between;
`;

export const DropdownToggleDiv = styled.div `
`;

export const UserNameDropdown = styled(Button)`
color: white !important;
margin-right: 3rem !important;
background: transparent !important;


  &:focus ,
     &:active{
      outline: none;
      background: none;
    }

    &:hover {
      background: none;
    }

`
export const UserNameDropdownMenu = styled(Menu) `
//margin-top: 2rem !important;
//margin-right: 31rem !important;
//background-color: red !important;
`;


  export const HeaderNavLink = styled(Link) `
 
    color: white !important;
    outline: none !important;
    padding: 0rem 1rem !important;
    transition-duration: 0.3s;
    &:focus ,
     &:active{
      outline: none;
      background: rgba(255,255,255,0.2); 
      border-radius: 20px;
      color: white !important;
      text-decoration: none !important;
    };

    &:hover {
      text-decoration: none !important;
    }
  ` ; 

  export const HeaderNavGrid = styled(Grid) `
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  `;

export const HeaderDropdownOptions = styled(Typography) `
margin-left: 20px !important;
`;




