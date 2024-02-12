import express from "express";
import { authenticate } from "../../controllers/auth/authMiddleware";
import {
  getOnboarding,
  getSteps,
  postStep,
} from "../../controllers/onboarding/onboarding";
const onboardingRouter = express.Router();

onboardingRouter.get("/", authenticate, getOnboarding);
onboardingRouter.get("/steps", authenticate, getSteps);

onboardingRouter.post("/:step", authenticate, postStep);
// onboardingRouter.get("/brand", authenticate, getOnboarding);

export default onboardingRouter;
