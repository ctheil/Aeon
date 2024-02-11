import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoginPage from "../app/auth/LoginPage";

const componentMapping = {
  LoginPage,
};
const props = window.__INITIAL_PROPS__;
console.log("[index.js]", props);

const ChildComponent = componentMapping[props.componentName];
// const ChildComponent = <>{props.children}</>;
console.log("[index.js]: ChildComponent", ChildComponent);

ReactDOM.hydrate(
  <App>
    <ChildComponent {...props} />
  </App>,
  document.getElementById("root"),
);
