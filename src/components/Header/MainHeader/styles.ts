import styled from "styled-components";

import { Col, Dropdown, Row } from "react-bootstrap";
export const CieHeader = styled.div`
top: 0px;
left: 0px;
width: 1920px;
height: 100px;
background: #172039 0% 0% no-repeat padding-box;
opacity: 1;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    padding-right: 35px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
    overflow: hidden;
    `;

export const UserDropdown = styled(Dropdown)`
margin-top: 35px;
//left: 1763px;
width: 96px;
height: 17px;
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
float: right;
margin-right: 37%;
position: inherit !important;
> button {
    background: none !important;
    border: none !important
    }
> button    &:focus,
  &:active {
    // border: none;
    box-shadow: none;
    border-color: red !important;
  }
`

export const UserDropdownMenu = styled(Dropdown.Menu)`
background: black !important;
`
export const UserDropdownMenuOptions = styled(Dropdown.Item) `
 color: white !important;
 &:hover {
    background: transparent !important;
  }
`
export const LogoutCustomTitle = styled(UserDropdownMenuOptions) `
color: red !important;
`

export const CustomDropdownToggle = styled(Dropdown.Toggle) `
 &:after {

     border-top: none !important
 } 
`


export const HeaderOptions = styled(Row) `
 float: right !important;
margin-top : 2% !important;
margin-right: 3% !important;
`
export const ConsumerInsightTitle = styled(Col) `
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-22)/var(--unnamed-line-spacing-27) var(--unnamed-font-family-roboto);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-ffffff);
text-align: left;
font: normal normal bold 22px/27px Roboto;
letter-spacing: 0px;
color: ${props=>props.selected?"white":"darkgrey"};
text-decoration:${props=>props.selected?"underline !important":"none"};
text-decoration-color:"white"
opacity: 1;
//margin-right: 1% !important;
white-space: nowrap !important;
cursor: pointer;
`

export const CustomTitle = styled(ConsumerInsightTitle)`
 margin-right: 0% !important;
`;
