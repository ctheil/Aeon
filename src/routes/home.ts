import express from "express";
import { getWelcome } from "../controllers/home";

const homeRouter = express.Router();

homeRouter.get("/", getWelcome);
// homeRouter.get("/", (req, res, next) => {
//   console.log("Home");
// });

export default homeRouter;
