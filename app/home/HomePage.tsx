import React from "react";

import { BaseProps } from "../../src/utils/build/renderReact";
import Input from "../components/forms/Input";
import CsrfInput from "../components/CsrfInput";
import { User } from "../../src/db/schema";
type HomeProps = {};

const HomePage: React.FC<BaseProps & HomeProps> = (props) => {
  console.log("[react]: home page props:", props);
  return (
    <div className="min-h-screen bg-l-bg dark:bg-d-bg">
      <h1>Welcome Home {props.user?.firstName}</h1>
    </div>
  );
};

export default HomePage;
