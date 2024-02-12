"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../controllers/auth/authMiddleware");
const onboarding_1 = require("../../controllers/onboarding/onboarding");
const onboardingRouter = express_1.default.Router();
onboardingRouter.get("/", authMiddleware_1.authenticate, onboarding_1.getOnboarding);
// onboardingRouter.get("/brand", authenticate, getOnboarding);
exports.default = onboardingRouter;
