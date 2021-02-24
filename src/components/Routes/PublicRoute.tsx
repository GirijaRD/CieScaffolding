import { Route, Redirect } from "react-router";
import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const PublicRoute: React.FunctionComponent<any> = ({
  component: Component,
  ...rest
}) => {
  //const { token } = rest;
  //console.log("login", rest);
  const usertoken = useSelector((state: any) => state.login.loggedInUser.token);

  const redirectPath = !usertoken ? "/login" : "/consumer";
  return (
    <Route
      {...rest}
      component={(props: any): ReactElement =>
        !usertoken ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
};
function mapStateToProps({ login }: any) {
  return {
    token: login.loggedInUser?.token,
  };
}
export default connect(mapStateToProps, null, null, { pure: false })(
  PublicRoute
);
