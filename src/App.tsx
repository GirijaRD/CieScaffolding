import React from "react";
import Login from "./pages/login";
import { Redirect, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import history from "./redux-setup/history";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Logger from "./components/Logger";
import Consumer from "pages/consumer";
import SignUp from "./pages/signup";
import PublicRoute from "components/Routes/PublicRoute";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Logger>
          <Switch>
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/signup" component={SignUp}></PublicRoute>
            <PrivateRoute exact path="/consumer" component={Consumer} />
            <PrivateRoute exact path="/competitor" component={Consumer} />
            <Redirect from="/*" to={"/login"} />
          </Switch>
        </Logger>
      </Router>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
