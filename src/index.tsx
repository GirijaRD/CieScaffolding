import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import storeConfig from "./redux-setup/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import history from "./redux-setup/history";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Logger from "./components/Logger";
import MainHeader from "./components/Header/MainHeader";
import SubHeader from "components/Header/SubHeader";
import Consumer from "pages/consumer";
import Maps from "./components/Maps";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
      <Router history={history}>
        <Logger>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute
            exact
            path="/consumer"
            component={Consumer}
          ></PrivateRoute>
          <Route exact path="/competitor" style={{ overflow: "hidden" }}>
            {/* <Login /> */}
            <MainHeader />
            <SubHeader></SubHeader>
            <Maps></Maps>
          </Route>
        </Logger>
      </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
