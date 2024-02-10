import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/authentication";
import { errorController } from "./utils/errors/ErrorController";
import path from "path";
import homeRouter from "./routes/home";
import session from "express-session";
import dotenv from "dotenv";
import { store } from "./db/session";
import dashboardRouter from "./routes/dashboard";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

/*
 *NOTE: SETUP
views, static dirs, body parsers, ...
 */
app.set("view engine", "pug");
app.set("views", "views");

const publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 *NOTE: SESSION
 *BUG: need to determine the best maxAge for the cookie
 */
if (!process.env.SESSION_SECRET) {
  throw new Error("No session secret found in env.");
}
app.use(
  session({
    store: store, // from db/session
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
  }),
);

/*
 *NOTE: ROUTES
 */

app.use("/", homeRouter);
app.use("/v1/auth", authRouter);

app.use("/v1/dashboard", dashboardRouter);

app.use(errorController);

app.listen(port, () => {
  console.log(`[server]: Server is listening on port: ${port}`);
});
