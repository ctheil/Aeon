import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/authentication";
import { errorController } from "./utils/errors/ErrorController";
import path from "path";
import homeRouter from "./routes/home";
import session from "express-session";
import dotenv from "dotenv";
import { dbPool } from "./db";
import connectPgSimple from "connect-pg-simple";
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
 */
if (!process.env.SESSION_SECRET) {
  throw new Error("No session secret found in env.");
}
const pgSession = connectPgSimple(session);
app.use(
  session({
    store: new pgSession({
      pool: dbPool,
      tableName: "user_sessions",
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

/*
 *NOTE: ROUTES
 */

app.use("/", homeRouter);
app.use("/v1/auth", authRouter);

app.use(errorController);

app.listen(port, () => {
  console.log(`[server]: Server is listening on port: ${port}`);
});
