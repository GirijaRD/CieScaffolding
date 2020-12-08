import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from './redux-setup/store'
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login";
import { BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter as Router } from 'connected-react-router';
import history from './redux-setup/history'
import PrivateRoute from './components/Routes/PrivateRoute';
import Logger from './components/Logger'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <PrivateRoute  path="/" component={"Home"}/>
        <Logger >
        <Route exact path ="/login">
          <Login/>
          </Route>
          </Logger>
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
