import styled from "styled-components";
import { FormControl } from "react-bootstrap";
import { ReactComponent as InformationCircle } from "./../../../assets/images/InformationCircle.svg";
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
width: 15px; 
height: 48px;
background: #F5F5F5 0% 0% no-repeat padding-box;
opacity: 1;
margin-top: -2%;
height: 34px;
margin-left: 22%;
width: 30% !important;
border-radius: 20px 20px 20px 20px;
`
export const EstimateCount = styled.div`
top: 106px;
left: 1474px;
width: 385px;
height: 56px;
background: transparent linear-gradient(90deg, #B3C3EF 0%, #7C90DB 100%) 0% 0% no-repeat padding-box;
border-radius: 10px;
opacity: 0.4;
float: right;
margin-right: 27px;
margin-top: -47px;
`

export const EstimatedAudienceReach = styled.span`
top: 24px;
left: 0px;
width: 100px;
height: 19px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-roboto);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 19px Roboto;
letter-spacing: 0px;
color: #4F62AA;
`;

export const EstimatedAudienceDiv = styled.div`
margin-top: 10px;
margin-left: 10px;
`;

export const EstimatedAudienceReachSubTitle = styled.span`
top: 0px;
left: 0px;
width: 86px;
height: 24px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 18px/var(--unnamed-line-spacing-19) var(--unnamed-font-family-roboto);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal bold 14px Roboto;
letter-spacing: 0px;
color: #4F62AA;
display: flex;
white-space: nowrap !important;
`;
export const InformationCircleDiv = styled.div`
    /* float: right; */
    margin-top: 7%;
    margin-right: 8%;
`;


export const InformationReachDropdownContent = styled.div `
    width: 29vw;
    background-color: ghostwhite !important;
    padding-left: 3%;
    padding-right: 3%;
`
export const InformationReachDropdownContentDiv = styled.div `
display: flex;
justify-content: space-between !important;
`
export const InformationIcon = styled(InformationCircle) `
margin-left: 70%;
`;