import express from "express";
import onboardingRouter from "./onboarding";
const dashboardRouter = express.Router();

dashboardRouter.use("/onboarding", onboardingRouter);

export default dashboardRouter;
