import express from "express";
import { postLogin, postSignup } from "../controllers/authentication";

const authRouter = express.Router();

authRouter.post("/signup", postSignup);
authRouter.post("/login", postLogin);

export default authRouter;
