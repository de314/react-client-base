import React from "react";
import ReactDOM from "react-dom";
import store from "./rdx/store";

import { Provider } from "react-redux";
import App from "./ui/App";

import "antd/dist/antd.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
