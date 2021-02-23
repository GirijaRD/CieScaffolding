import React, { ReactElement } from "react";

import Logo from "../../assets/images/image (7).png";

import {
  CieHeader,
  AdaLogo,
  MainHeaderGrid,
  DropdownToggleDiv,
  UserNameDropdown,
  UserNameDropdownMenu,
  HeaderNavLink,
  HeaderNavGrid,
  HeaderDropdownOptions,
} from "./styles";
import { logout } from "../../features/login-flow";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import ConsumerInsightIcon from "../../icons/ConsumerInsightIcon";
import CompetitorsInsightsIcon from "../../icons/competitors-insights-icon";
import AudienceIcon from "../../icons/audience-icon";
import UsernameIcon from "../../icons/username-icon";
import LogoutIcon from "../../icons/logout-icon";
import HelpIcon from "../../icons/help-icon";
import AdminIcon from "../../icons/admin-icon";
import { Icon } from "@material-ui/core";
import { useLocation } from "react-router-dom";
interface HeaderProps {
  path: string;
  Logout: () => any;
}

function mapStateToProps({ router: { location } }: any) {
  return {
    path: location.pathname,
  };
}

export const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    "& .MuiPaper-root": {
      background: "rgba(0, 0, 0, 0.5)",
      color: "white !important",
      width: "12vw",
      marginTop: "2rem !important",
    },
  },
  button: {
    "& .MuiButton-label": {
      color: "white !important",
    },

    "dhtMTh:focus": {
      color: "white !important",
      background: "white 0% 0% no-repeat padding-box",
      border: "2px solid #FFFFFF",
      borderRadius: "26px !important",
      opacity: "0.1 !important",
    },
  },
  active: {
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "20px",
    color: "white !important",
    textDecoration: "none !important",
  },
}));

const Header: React.FunctionComponent<HeaderProps> = ({
  path,
  Logout,
}: HeaderProps): ReactElement => {
  const history = useHistory();
  function navigate(location: string) {
    if ("/" + location !== path) history.push(location);
  }
  const location = useLocation();
  console.log("Current locations is:" + JSON.stringify(location));
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CieHeader position="static">
      <MainHeaderGrid item lg={12} md={12}>
        <Grid item lg={2} sm={2} md={2}>
          <AdaLogo src={Logo}></AdaLogo>
        </Grid>
        <HeaderNavGrid item lg={10} sm={10} md={10}>
          <Grid
            item
            lg={9}
            sm={9}
            md={9}
            style={{
              justifyContent: "flex-end",
              float: "right",
              display: "flex",
            }}
          >
            <HeaderNavLink
              className={
                location.pathname === "/consumer" ? classes.active : ""
              }
              to="/consumer"
            >
              <Icon fontSize="small">
                <ConsumerInsightIcon
                  style={{ width: "19px", marginRight: "10px" }}
                />
              </Icon>
              Consumer Insights
            </HeaderNavLink>

            <HeaderNavLink
              className={
                location.pathname === "/competitor" ? classes.active : ""
              }
              to="/competitor"
            >
              <Icon fontSize="small">
                <CompetitorsInsightsIcon
                  style={{ width: "19px", marginRight: "10px" }}
                />
              </Icon>
              Competitor Insights
            </HeaderNavLink>
            <HeaderNavLink to="/audience">
              <Icon fontSize="small">
                <AudienceIcon style={{ width: "19px", marginRight: "10px" }} />
              </Icon>
              Audience
            </HeaderNavLink>
          </Grid>
          {/* </HeaderOptionsDiv> */}
          <Grid lg={3} sm={3} md={3} style={{ display: "contents" }}>
            <DropdownToggleDiv>
              <Icon fontSize="small">
                <UserNameDropdown
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <UsernameIcon
                    style={{ width: "19px", marginRight: "10px" }}
                  />
                  Admin
                </UserNameDropdown>
              </Icon>

              <UserNameDropdownMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose} divider>
                  <AdminIcon
                    style={{
                      width: "19px",
                      marginLeft: "9px",
                    }}
                  />

                  <HeaderDropdownOptions>Admin</HeaderDropdownOptions>
                </MenuItem>

                <MenuItem onClick={handleClose} divider>
                  <HelpIcon
                    style={{
                      width: "19px",
                      marginLeft: "9px",
                    }}
                  />

                  <HeaderDropdownOptions>Help</HeaderDropdownOptions>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LogoutIcon
                    style={{
                      width: "19px",
                      marginLeft: "9px",
                    }}
                  />

                  <HeaderDropdownOptions style={{ color: "red" }}>
                    Logout
                  </HeaderDropdownOptions>
                </MenuItem>
              </UserNameDropdownMenu>
            </DropdownToggleDiv>
          </Grid>
        </HeaderNavGrid>
      </MainHeaderGrid>
    </CieHeader>
  );
};
function mapDispatchToProps(dispatch: any) {
  return {
    Logout: () => {
      dispatch(logout());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
