import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import * as schema from "../db/schema";

export const getWelcome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await db.select().from(schema.users).limit(1);
  if (users.length === 0) {
    // !owner exists -> welcome
    return res.redirect("/v1/auth/welcome");
  }

  return res.send("Taking you to the admin console...");
};
