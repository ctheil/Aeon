import { NextFunction, Request, Response } from "express";
import { Err } from "./Err";

export const errorController = (
  err: Err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(err.status || 500).send(err.message);
};
