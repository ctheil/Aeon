import express from "express";
const onboardingRouter = express.Router();

onboardingRouter.get("/", () => console.log("ONBOARDING"));

export default onboardingRouter;
