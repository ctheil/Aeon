import express, { NextFunction, Request, Response } from "express";
import authRouter from "./routes/authentication";
import { errorController } from "./utils/errors/ErrorController";
import path from "path";
import homeRouter from "./routes/home";
import session from "express-session";
import dotenv from "dotenv";
import { store } from "./db/session";
import dashboardRouter from "./routes/dashboard";
import cookieParser from "cookie-parser";
import { doubleCsrf } from "csrf-csrf";
import flash from "connect-flash"
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  }),
);

/*
 *NOTE: SETUP
views, static dirs, body parsers, ...
 */
app.set("view engine", "pug");
app.set("views", "views");

const publicDirPath = path.join(__dirname, "../public");
app.use(express.static(publicDirPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }, // 30 days
  }),
);

app.use(flash())
/*
 *NOTE: CSRF Protection

 */
const CSRF_SECRET = "8c64c9a9-a86f-45ee-954e-1e2d35038978";
const COOKIES_SECRET = "8c64c9a9-a86f-45ee-954e-1e2d35038978";
const CSRF_COOKIE_NAME = "x-csrf-token";
const {
  generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
  doubleCsrfProtection, // This is the default CSRF protection middleware.
} = doubleCsrf({
  getSecret: () => CSRF_SECRET,
  cookieOptions: { sameSite: false, secure: false, signed: true },
  cookieName: CSRF_COOKIE_NAME,
  getTokenFromRequest: (req) => {
    console.log("body token", req.body._csrf);
    return req.body._csrf;
  },
});
app.use(cookieParser(COOKIES_SECRET));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.isAuthenticated = req.session.isAuthenticated;
  res.locals.user = req.session.user;
  res.locals.csrfToken = generateToken(req, res);
  res.locals.sideBar = [
    {
      name: "Home",
      href: "/",
      icon: "homeIcon",
    },
    {
      name: "Settings",
      href: "/v1/admin/dashboard/settings",
      icon: "settingsCog",
    },
  ];
  next();
});
app.use(doubleCsrfProtection);

/*
 *NOTE: ROUTES
 */

app.get("/htmx", () => console.log("Hello HTMX"));
app.use("/", homeRouter);
app.use("/v1/auth", authRouter);

app.use("/v1/dashboard", dashboardRouter);

app.use(errorController);

app.listen(port, () => {
  console.log(`[server]: Server is listening on port: ${port}`);
});
