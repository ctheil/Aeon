"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_1 = __importDefault(require("./routes/authentication"));
const ErrorController_1 = require("./utils/errors/ErrorController");
const path_1 = __importDefault(require("path"));
const home_1 = __importDefault(require("./routes/home"));
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
const session_1 = require("./db/session");
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const csrf_csrf_1 = require("csrf-csrf");
const cors_1 = __importDefault(require("cors"));
// import fs from "fs";
// import * as React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from "../views/App";
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:3000",
}));
/*
 *NOTE: SETUP
views, static dirs, body parsers, ...
 */
app.set("view engine", "pug");
app.set("views", "views");
const publicDirPath = path_1.default.join(__dirname, "../public");
const distDirPath = path_1.default.join(__dirname, "../dist");
app.use(express_1.default.static(publicDirPath));
app.use(express_1.default.static(distDirPath));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/*
 *NOTE: SESSION
 *BUG: need to determine the best maxAge for the cookie
 */
if (!process.env.SESSION_SECRET) {
    throw new Error("No session secret found in env.");
}
app.use((0, express_session_1.default)({
    store: session_1.store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000, secure: false }, // 30 days
}));
/*
 *NOTE: CSRF Protection

 */
const CSRF_SECRET = "8c64c9a9-a86f-45ee-954e-1e2d35038978";
const COOKIES_SECRET = "8c64c9a9-a86f-45ee-954e-1e2d35038978";
const CSRF_COOKIE_NAME = "x-csrf-token";
const { generateToken, // Use this in your routes to provide a CSRF hash + token cookie and token.
doubleCsrfProtection, // This is the default CSRF protection middleware.
 } = (0, csrf_csrf_1.doubleCsrf)({
    getSecret: () => CSRF_SECRET,
    cookieOptions: { sameSite: false, secure: false, signed: true },
    cookieName: CSRF_COOKIE_NAME,
    getTokenFromRequest: (req) => {
        return req.body._csrf;
    },
});
app.use((0, cookie_parser_1.default)(COOKIES_SECRET));
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated;
    res.locals.user = req.session.user;
    res.locals.csrfToken = generateToken(req, res);
    next();
});
app.use(doubleCsrfProtection);
/*
 *NOTE: ROUTES
 */
app.use("/", home_1.default);
app.use("/v1/auth", authentication_1.default);
app.use("/v1/dashboard", dashboard_1.default);
app.use(ErrorController_1.errorController);
app.listen(port, () => {
    console.log(`[server]: Server is listening on port: ${port}`);
});
