import { Route, Redirect } from "react-router";
import React, { ReactElement } from "react";
import { connect } from "react-redux";
const PublicRoute: React.FunctionComponent<any> = ({
  component: Component,
  ...rest
}) => {
  const { token } = rest;
  console.log("login",rest)
  const redirectPath=!token?"/login":"/consumer";
  return (
    <Route
      {...rest}
      component={(props: any): ReactElement => (!token  ? (
        <Component
          {...props}
        />
      ) : (
        <Redirect to={redirectPath} />
      ))}
    />
  );
};
function mapStateToProps({ login }: any) {
  return {
    token: login.loggedInUser.token,
  };
}
export default connect(mapStateToProps,null,null,{pure:false})(PublicRoute);
