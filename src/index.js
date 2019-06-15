import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./core/styles/index.css";
import store from "./core/state/store";
import App from "./core/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
