"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const onboarding_1 = __importDefault(require("./onboarding"));
const dashboardRouter = express_1.default.Router();
dashboardRouter.use("/onboarding", onboarding_1.default);
exports.default = dashboardRouter;
