import React from "react";
import Logo from "../../assets/images/NewLogo.png";
import TitleImage1 from "../../assets/images/image (4).png";
import styled from "styled-components";
import { colors } from "components/Common/colors";

const AdaLogo = styled.div`
  display: flex;
  align-items: flex-start;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  margin-top: 5%;
`;
const CieTitleWrapper = styled.div`
  margin-top: 8%;
  font-family: "Roboto", sans-serif;
  h3 {
    font-size: 2rem;
  }
`;

const CieContentWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  color: ${colors.introblue};
  font-weight: 500;
  p {
    line-height: 2rem;
  }
`;

const CieContentCard = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

export default function IntroTextComponent() {
  return (
    <>
      <AdaLogo>
        <img src={Logo} alt="logo" />
      </AdaLogo>
      <CardWrapper>
        <ImageWrapper>
          <img src={TitleImage1} alt="img" />
        </ImageWrapper>
        <CieContentCard>
          <CieTitleWrapper>
            <h3>Consumer Insights Explorer</h3>
          </CieTitleWrapper>
          <CieContentWrapper>
            <p>
              Better understand customer segments in terms of their location,
              demographics, wealth, life, stage, online and offline behavior
            </p>
          </CieContentWrapper>
        </CieContentCard>
      </CardWrapper>
    </>
  );
}
