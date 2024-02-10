import express from "express";
import { getWelcome } from "../controllers/home";
import { authenticate } from "../controllers/auth/authMiddleware";

const homeRouter = express.Router();

homeRouter.get("/", authenticate, getWelcome);

export default homeRouter;
