import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./redux-setup/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import history from "./redux-setup/history";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Logger from "./components/Logger";
import Header from "./components/Header";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Logger>
          <Route exact path="/consumer">
           <Header/>
          </Route>
          <Route exact path="/competitor">
           <Header/>
          </Route>
        </Logger>
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
