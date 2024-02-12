import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import * as schema from "../db/schema";
import HomePage from "../../app/home/HomePage";
import { renderReact } from "../utils/build/renderReact";

export const getWelcome = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await db.select().from(schema.users).limit(1);
  if (users.length === 0) {
    // !owner exists -> welcome
    console.log("[server]: No owner -> red. to welcome");
    return res.redirect("/v1/auth/welcome");
  }

  console.log("Rendering home...");
  return renderReact(req, res, next, HomePage, "HomePage", {});
};
