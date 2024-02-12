"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnboarding = void 0;
const getOnboarding = (req, res, next) => {
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
exports.getOnboarding = getOnboarding;
