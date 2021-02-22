import React from "react";
import {
  LoginFormGrid,
  MainContainer,
  IntroContainer,
  MainGrid,
  IntroGridView,
} from "../Common/styles";
import IntroTextComponent from "components/IntroTextComponent";

interface props {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<props> = ({ children }) => {
  return (
    <MainContainer>
      <IntroContainer>
        <MainGrid container>
          <IntroGridView item lg={6} sm={12} md={6}>
            <IntroTextComponent />
          </IntroGridView>
          <LoginFormGrid item lg={6} sm={12} md={6}>
            {children}
          </LoginFormGrid>
        </MainGrid>
      </IntroContainer>
    </MainContainer>
  );
};

export default AuthWrapper;
