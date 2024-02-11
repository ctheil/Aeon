import React from "react";

import App from "../App";
import { BaseProps } from "../../src/utils/build/renderReact";
import Input from "../components/forms/Input";
import CsrfInput from "../components/CsrfInput";
type LoginProps = {
  test: string;
};

const LoginPage: React.FC<BaseProps & LoginProps> = (props) => {
  console.log("[react]: page props:", props);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-l-p-500 dark:text-d-p-500 sm:text-3xl ">
            Welcome back
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300">
            As the initial administrator, you'll need to set up your account to
            enable you to customize, manage, and optimize the platform to
            perfectly fit your organization.
          </p>
          <form
            action="/v1/auth/login"
            method="POST"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium mb-10 text-l-p-500 dark:text-d-p-500">
              Login
            </p>
            <Input
              name="email"
              friendlyName="Email"
              placeholder="Enter email"
              type="email"
              // icon={<MdOutlineEmail />}
            />
            <Input
              name="password"
              friendlyName="Password"
              placeholder="Enter password"
              type="password"
              // icon={<FaUnlockKeyhole />}
            />
            <CsrfInput token={props.csrfToken} />
            <button
              type="submit"
              className="block w-full rounded-lg bg-l-p-bg dark:bg-d-p-bg
            px-5 py-3 text-sm font-medium text-l-p-500 dark:text-d-p-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
