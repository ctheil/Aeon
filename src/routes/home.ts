import express from "express";
import { getWelcome } from "../controllers/home";
import { authenticate } from "../controllers/auth/authMiddleware";

const homeRouter = express.Router();

homeRouter.get("/", authenticate, getWelcome);
// homeRouter.get("/", (req, res, next) => {
//   console.log("Home");
// });

export default homeRouter;
