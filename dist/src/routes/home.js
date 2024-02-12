"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = require("../controllers/home");
const authMiddleware_1 = require("../controllers/auth/authMiddleware");
const homeRouter = express_1.default.Router();
homeRouter.get("/", authMiddleware_1.authenticate, home_1.getWelcome);
exports.default = homeRouter;
