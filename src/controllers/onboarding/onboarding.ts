import { NextFunction, Request, Response } from "express";
import getActiveAndInactive from "../../utils/menu/getActiveAndInactive";
import { Err } from "../../utils/errors/Err";
import { Settings } from "../../models/settings";
import * as schema from "../../db/schema";

const sidebarItems = [
  {
    name: "Onboarding",
    href: "/v1/dashboard/onboarding",
    active: false,
    icon: "onboardingIcon",
  },
  {
    name: "Home",
    href: "/",
    active: false,
    icon: "homeIcon",
  },
  {
    name: "Settings",
    href: "/v1/admin/dashboard/settings",
    active: false,
    icon: "settingsCog",
  },
];

export const getOnboarding = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { active, inactive } = getActiveAndInactive(sidebarItems, "Onboarding");

  return res.render("onboarding/index", {
    current: "onboarding",
    user: req.session.user,
    currentRoute: "/onboarding",
    sideBar: {
      active: active,
      inactive: inactive,
    },
  });
};

export const getSteps = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.session.user?.accountType !== "owner") {
    const error = new Err(
      "Only owner accounts can complete the onboarding process",
    );
    error.setStatus(422);
    return next(error);
  }
  let settings = await Settings.getSettings();
  return res.render("onboarding/org", {
    steps: ["test"],
    settings: settings,
  });
};

const isValidKey = (key: string): key is keyof schema.Settings => {
  // return false;
  return key in schema.settings;
};
export const postStep = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("POST STEP");
  const step = req.params.step;
  if (req.session.user?.accountType !== "owner") {
    const error = new Err(
      "Only owner accounts can complete the onboarding process",
    );
    error.setStatus(422);
    return next(error);
  }
  const val = req.body[step];
  if (!isValidKey(step)) {
    console.log(step);
    const error = new Err("Invalid key name");
    error.setStatus(404);
    return next(error);
  }
  try {
    const update = await Settings.update(step, val);
    console.log("UPDATED: ", update);
    return res.render("onboarding/org", {
      steps: ["test"],
      settings: update[0],
    });
  } catch (err) {
    const error = new Err("Error updating settings ...");
    error.setStatus(500);
    return next(error);
  }
};
