import { NextFunction, Request, Response } from "express";
import fs from "fs";
import React, { FunctionComponent } from "react";
import ReactDOMServer from "react-dom/server";
import { Err } from "../errors/Err";
import path from "path";

export interface BaseProps {
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  csrfToken: string;
  isAuthenticated?: boolean;
}

export const renderReact = <P extends {}>(
  req: Request,
  res: Response,
  next: NextFunction,
  component: React.FC<BaseProps & P>,
  componentName: string,
  props: P,
) => {
  const extendedProps = {
    ...props,
    user: req.session.user,
    isAuthenticated: req.session.isAuthenticated,
    componentName,
    csrfToken: res.locals.csrfToken,
    children: component,
  };

  console.log(extendedProps);

  try {
    fs.readFile(
      path.resolve("./public/html/index.html"),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
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
        // console.log("[server]: rendered html:", renderedHtml);
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
