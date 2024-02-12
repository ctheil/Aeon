import { NextFunction, Request, Response } from "express";
import fs from "fs";
import React, { FunctionComponent } from "react";
import ReactDOMServer from "react-dom/server";
import { Err } from "../errors/Err";
import path from "path";
import * as schema from "../../db/schema";

export interface BaseProps {
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  csrfToken: string;
  isAuthenticated: boolean;
  settings?: schema.Settings;
}
type WithRequiredUser<T extends BaseProps> = T & {
  user: NonNullable<T["user"]>;
};

export const renderReact = <P extends {}>(
  req: Request,
  res: Response,
  next: NextFunction,
  component: React.FC<BaseProps & P>,
  componentName: string,
  props: P,
  requiredUser = false,
) => {
  let extendedProps = {
    ...props,
    isAuthenticated: req.session.isAuthenticated,
    componentName,
    csrfToken: res.locals.csrfToken,
    user: req.session.user,
    settings: res.locals.settings,
  };

  try {
    fs.readFile(
      path.resolve("./dist/bundle/index.html"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }

        if (!extendedProps.user && requiredUser) {
          const error = new Err("User is required for this view");
          error.setStatus(500);
          console.warn(error);
          throw error;
        }

        // Use React.createElement to avoid JSX syntax if TS is causing issues
        const reactAppElement = React.createElement(
          component,
          extendedProps as BaseProps & P,
        );
        const reactAppString = ReactDOMServer.renderToString(reactAppElement);

        const injectProps = data.replace(
          `window.__INITIAL_PROPS__ = "";`,
          `window.__INITIAL_PROPS__ = ${JSON.stringify(extendedProps)};`,
        );
        const renderedHtml = injectProps.replace(
          '<div id="root"></div>',
          `<div id="root">${reactAppString}</div>`,
        );
        return res.send(renderedHtml);
      },
    );
  } catch (err) {
    console.warn(err);
    const error = new Err(`Error rendering view: ${err}`);
    error.setStatus(500);
    return next(error);
  }
};
