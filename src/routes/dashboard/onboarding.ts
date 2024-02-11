import express from "express";
import { authenticate } from "../../controllers/auth/authMiddleware";
import { getOnboarding } from "../../controllers/onboarding/onboarding";
const onboardingRouter = express.Router();

onboardingRouter.get("/", authenticate, getOnboarding);
// onboardingRouter.get("/brand", authenticate, getOnboarding);

export default onboardingRouter;
