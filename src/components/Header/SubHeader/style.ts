import styled from "styled-components";
import { FormControl } from "react-bootstrap";

export const CieSubHeader = styled.div `
z-index: 30 !important;

top: 101px;
left: 0px;
width: 1920px;
height: 72px;
border: 1px solid #E4E4E4;
opacity: 1;
overflow: hidden;
`;

export const InformativeMapTitle = styled.div `
top: 120px;
left: 50px;
width: 193px;
height: 34px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-26)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-roboto);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal bold 26px/34px Roboto;
letter-spacing: 0px;
color: #0D0B0B;
opacity: 1;
margin-left: 60px;
margin-top: 16px;
`

export const SearchBoxInSubHeader = styled(FormControl) `
top: 113px;
left: 295px;
width: 515px;
height: 48px;
background: #F5F5F5 0% 0% no-repeat padding-box;
opacity: 1;
`