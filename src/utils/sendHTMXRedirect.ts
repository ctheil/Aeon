import { NextFunction, Request, Response } from "express";

export const sendHTMXRedirect = (
  req: Request,
  res: Response,
  next: NextFunction,
  route: string,
) => {
  const jsRedirect = `<script>window.location.href = "${route}";</script>`;
  res.setHeader("Content-Type", "text/html");
  return res.send(jsRedirect);
};
