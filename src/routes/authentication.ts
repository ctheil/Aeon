import express from "express";
import {
  getSignup,
  postLogin,
  postSignup,
} from "../controllers/authentication";

const authRouter = express.Router();

authRouter.post("/signup", postSignup);
authRouter.get("/signup", getSignup);
authRouter.post("/login", postLogin);

export default authRouter;
