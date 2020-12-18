import { Route, Redirect } from "react-router";
import React from "react";
import { connect } from "react-redux";
const PrivateRoute: React.FunctionComponent<any> = ({
  component: Component,
  ...rest
}) => {
  const { token } = rest;

  return (
    <Route
      {...rest}
      render={(props) => {
        const combinedProps = { ...props, ...rest };
        return token ? (
          <Component {...combinedProps}></Component>
        ) : (
          <Redirect to="/header" />
        );
      }}
    ></Route>
  );
};
function mapStateToProps({ login }: any) {
  return {
    token: login.loggedInUser.token,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
