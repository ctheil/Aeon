import { NextFunction, Request, Response } from "express";
import { Err } from "./Err";

export const errorController = (
  err: Err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // if (err.status && +String(err.status)[0] === 4) {
  //   return res.render("partials/error", {
  //     title: "Error",
  //     message: err.message,
  //   });
  // }
  return res.status(err.status || 500).send(err.message);
};
