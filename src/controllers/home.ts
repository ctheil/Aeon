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
    console.log("[server]: No owner -> red. to welcome");
    return res.redirect("/v1/auth/welcome");
  }

  return res.render("home/home", {
    current: "home",
    user: req.session.user,
    currentRoute: "/",
    sideBar: {
      active: {
        name: "Home",
        href: "/v1/admin/dashboard",
        active: true,
        icon: "homeIcon",
      },
      inactive: [
        {
          name: "Settings",
          href: "/v1/admin/dashboard/settings",
          active: false,
          icon: "settingsCog",
        },
      ],
    },
  });
  // return res.send("Taking you to the admin console...");
};
