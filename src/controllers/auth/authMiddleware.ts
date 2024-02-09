import { NextFunction, Response, Request } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { isAuthenticated } = req.session;
  console.log(req.session);

  if (!isAuthenticated) {
    return res.redirect("/v1/auth/login");
  }
  return next();
};
