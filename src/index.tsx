import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './redux-setup/store'
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Login from "./pages/login";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './components/Routes/PrivateRoute';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PrivateRoute path="/" component={<div>Home</div>}/>
        <Route exact path ="/login">
          <Login/>
          </Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
