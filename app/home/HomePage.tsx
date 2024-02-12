import React from "react";

import { BaseProps } from "../../src/utils/build/renderReact";
type HomeProps = {};

const HomePage: React.FC<BaseProps & HomeProps> = (props) => {
  console.log("[react]: home page props:", props);
  return (
    <div className="min-h-screen bg-l-bg dark:bg-d-bg">
      <h1>Welcome Back {props.user?.firstName}</h1>
    </div>
  );
};

export default HomePage;
