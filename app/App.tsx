import * as React from "react";
import { BaseProps } from "../src/utils/build/renderReact";

type AppProps = {
  children: JSX.Element;
  BaseProps: BaseProps;
};

const App = (props: AppProps) => {
  return (
    <main className="min-h-screen bg-l-bg dark:bg-d-bg">{props.children}</main>
  );
};

export default App;
