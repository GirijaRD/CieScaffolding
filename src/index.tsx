import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import storeConfig from "./redux-setup/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login";
import { Redirect, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import history from "./redux-setup/history";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Logger from "./components/Logger";
import Consumer from "pages/consumer";
import { PersistGate } from "redux-persist/integration/react";
import PublicRoute from "components/Routes/PublicRoute";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
      <Router history={history}>
        <Logger>
          <Switch>
          <PublicRoute exact path="/login"
          component={Login}
          />  
          <PrivateRoute
            exact
            path="/consumer"
            component={Consumer}
          />
          <PrivateRoute
            exact
            path="/competitor"
            component={Consumer}
          />
          <Redirect
              from="/*"
              to={"/login"}
            />
          </Switch>
        </Logger>
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
