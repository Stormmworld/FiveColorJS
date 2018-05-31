import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from "./Store/store";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);