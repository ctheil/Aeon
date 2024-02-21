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
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password is required and must be at least 6 characters."),
  body("confirm-password")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords do not match."),
  body("firstName").trim().notEmpty().withMessage("First Name is required"),
  body("lastName").trim().notEmpty().withMessage("Last Name is required"),
  postSignup,
);
authRouter.post(
  "/login",
  body("email").trim().notEmpty().isEmail(),
  body("password").trim().notEmpty(),
  postLogin,
);
authRouter.post("/logout", postLogout);

export default authRouter;
