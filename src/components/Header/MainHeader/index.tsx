import React, { ReactElement } from "react";
import Logo from "./../../../assets/images/NewLogo.png";
import { Image } from "react-bootstrap";
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
import {logout} from '../../../features/login-flow'
import { connect } from "react-redux";

import { useHistory } from "react-router";
interface HeaderProps {
  path: string,
  Logout: ()=>any,
}

function mapStateToProps({ router: { location } }: any) {
  return {
    path: location.pathname,
  };
}

const MainHeader: React.FunctionComponent<HeaderProps> = ({
  path,
  Logout
}: HeaderProps): ReactElement => {
  const history = useHistory();
  function navigate(location: string) {
    if ("/" + location !== path) history.push(location);
  }
  
  return (
    <HeaderContainer>
      <CieHeader>
        <Image src={Logo} style={{ marginLeft: "4rem" }} />

        <UserDropdown>
          <CustomDropdownToggle id="dropdown-basic">
            Username
          </CustomDropdownToggle>

          <UserDropdownMenu>
            <UserDropdownMenuOptions onClick={navigate.bind(null, "admin")}>
              Admin
            </UserDropdownMenuOptions>
            <UserDropdownMenuOptions href="#/action-2">
              Help
            </UserDropdownMenuOptions>
            <LogoutCustomTitle onClick={Logout}>LogOut</LogoutCustomTitle>
          </UserDropdownMenu>
        </UserDropdown>
        <HeaderOptions>
          <ConsumerInsightTitle
            selected={path === "/consumer"}
            onClick={navigate.bind(null, "consumer")}
          >
            Consumer Insights
          </ConsumerInsightTitle>
          <ConsumerInsightTitle
            selected={path === "/competitor"}
            onClick={navigate.bind(null, "competitor")}
          >
            Comptitors Insights
          </ConsumerInsightTitle>
          <ConsumerInsightTitle
            selected={path === "/audience"}
            onClick={navigate.bind(null, "audience")}
          >
            Audience
          </ConsumerInsightTitle>
        </HeaderOptions>
      </CieHeader>
    </HeaderContainer>
  );
};
function mapDispatchToProps(dispatch:any){
  return {
    Logout:()=>{dispatch(logout())},

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainHeader);
