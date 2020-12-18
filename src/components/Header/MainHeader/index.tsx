import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Logo from "./../../../assets/images/logo.png";
import { Image, Dropdown } from "react-bootstrap";
import {
  CieHeader,
  HeaderContainer,
  UserDropdown,
  HeaderOptions,
  ConsumerInsightTitle,
  UserDropdownMenu,
  LogoutCustomTitle,
  UserDropdownMenuOptions,
  CustomDropdownToggle,
} from "./styles";

interface Props {}

export default function MainHeader({}: Props): ReactElement {
  return (
    <HeaderContainer>
      <CieHeader>
        <Image src={Logo} style={{ marginLeft: "4rem" }} />

        <UserDropdown>
          <CustomDropdownToggle id="dropdown-basic">
            Username
          </CustomDropdownToggle>

          <UserDropdownMenu>
            <UserDropdownMenuOptions href="#/action-1">
              Admin
            </UserDropdownMenuOptions>
            <UserDropdownMenuOptions href="#/action-2">
              Help
            </UserDropdownMenuOptions>
            <LogoutCustomTitle href="#/action-3">LogOut</LogoutCustomTitle>
          </UserDropdownMenu>
        </UserDropdown>
        <HeaderOptions>
          <ConsumerInsightTitle>Consumer Insights</ConsumerInsightTitle>
          <ConsumerInsightTitle>Comptitors Insights</ConsumerInsightTitle>
          <ConsumerInsightTitle>Audience</ConsumerInsightTitle>
        </HeaderOptions>
      </CieHeader>
    </HeaderContainer>
  );
}
