import { NextFunction, Request, Response } from "express";

export const getOnboarding = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.render("onboarding/index", {
    current: "onboarding",
    user: req.session.user,
    currentRoute: "/onboarding",
    sideBar: {
      active: {
        name: "Onboarding",
        href: "/v1/dashboard/onboarding",
        active: true,
        icon: "onboardingIcon",
      },
      inactive: [
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
      ],
    },
  });
  // return res.render("onboarding/onboarding", {
  //   user: req.session.user,
  // });
};
