import express from "express";
import {
  getLogin,
  getWelcome,
  postLogin,
  postLogout,
  postSignup,
} from "../controllers/auth/authentication";
import { body } from "express-validator";

const authRouter = express.Router();

authRouter.get("/welcome", getWelcome);
authRouter.get("/login", getLogin);

authRouter.post(
  "/signup",
  body("email").trim().notEmpty().isEmail().withMessage("Email is required."),
  body("username").trim().notEmpty().withMessage("Username is required."),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Username is required."),
  body("confirm-password").custom((value, { req }) => {
    return value === req.body.password;
  }),
  postSignup,
);
authRouter.post("/login", postLogin);
authRouter.post("/logout", postLogout);

export default authRouter;
