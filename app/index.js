import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginPage from "../app/auth/LoginPage";
import HomePage from "../app/home/HomePage";

const componentMapping = {
  LoginPage,
  HomePage,
};
const props = window.__INITIAL_PROPS__;
console.log("[index.js]", props);

const Component = componentMapping[props.componentName];

ReactDOM.hydrate(<Component {...props} />, document.getElementById("root"));
