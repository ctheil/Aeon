import React from "react";

import { BaseProps } from "../../src/utils/build/renderReact";
import CsrfInput from "../components/CsrfInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../util/mui/theme";
type LoginProps = {
  test: string;
};

const LoginPage: React.FC<BaseProps & LoginProps> = (props) => {
  console.log("[react]: page props:", props);
  return (
    <div className="min-h-screen bg-l-bg dark:bg-d-neutral-dim flex w-full items-center content-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 border dark:border-d-outline-v rounded">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-thin text-l-p-500 dark:text-d-p sm:text-3xl ">
            Welcome
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-d-text-on-neutral-dim">
            As the initial administrator, you'll need to set up your account to
            enable you to customize, manage, and optimize the platform to
            perfectly fit your organization.
          </p>
          <form
            action="/v1/auth/login"
            method="POST"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <ThemeProvider theme={theme}>
              <TextField
                name="email"
                type="email"
                label="email"
                fullWidth
                placeholder="jane.doe@aeon.com"
                variant="outlined"
              />
              <TextField
                label="password"
                name="password"
                type="password"
                fullWidth
                variant="outlined"
              />
              <CsrfInput token={props.csrfToken} />
              <Button variant="outlined" fullWidth type="submit">
                Login
              </Button>
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
