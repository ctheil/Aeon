"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../controllers/auth/authentication");
const express_validator_1 = require("express-validator");
const authRouter = express_1.default.Router();
authRouter.get("/welcome", authentication_1.getWelcome);
authRouter.get("/login", authentication_1.getLogin);
authRouter.post("/signup", (0, express_validator_1.body)("email").trim().notEmpty().isEmail().withMessage("Email is required."), (0, express_validator_1.body)("username").trim().notEmpty().withMessage("Username is required."), (0, express_validator_1.body)("password")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Username is required."), (0, express_validator_1.body)("confirm-password").custom((value, { req }) => {
    return value === req.body.password;
}), authentication_1.postSignup);
authRouter.post("/login", authentication_1.postLogin);
authRouter.post("/logout", authentication_1.postLogout);
exports.default = authRouter;
