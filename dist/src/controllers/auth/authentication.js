"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogout = exports.postLogin = exports.postSignup = exports.getLogin = exports.getWelcome = void 0;
const user_1 = require("../../models/user");
const Err_1 = require("../../utils/errors/Err");
const sendHTMXRedirect_1 = require("../../utils/sendHTMXRedirect");
const renderReact_1 = require("../../utils/build/renderReact");
const LoginPage_1 = __importDefault(require("../../views/auth/LoginPage"));
const getWelcome = (req, res, next) => {
    if (req.session.isAuthenticated) {
        return res.redirect("/");
    }
    return res.render("auth/welcome", {
        pageTitle: "Welcome",
    });
};
exports.getWelcome = getWelcome;
const getLogin = (req, res, next) => {
    if (req.session.isAuthenticated) {
        return res.redirect("/");
    }
    return (0, renderReact_1.renderReact)(req, res, next, LoginPage_1.default, "LoginPage", { test: "test" });
};
exports.getLogin = getLogin;
const postSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(422).send("No credentials provided");
    }
    if (req.session.isAuthenticated) {
        return res.redirect("/");
    }
    // user exists?
    try {
        if (yield user_1.User.findByAccountType("owner")) {
            const error = new Err_1.Err("New users must be invited by the account owner. Please reach out and request an invite.");
            error.setStatus(403);
            return next(error);
        }
        const user = user_1.User.createNewUser(firstName, lastName, email, password, "owner");
        user.save();
        console.log("[auth]: signup success");
        res.redirect("/v1/auth/login");
    }
    catch (err) {
        console.error(err);
        const error = new Err_1.Err("Uh oh... there was a problem signing you up. Don't worry, that's on us. We've been notified and well get right on it.");
        error.setStatus(500);
        return next(error);
    }
});
exports.postSignup = postSignup;
const postLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send("No credentials provided");
    }
    try {
        const user = yield user_1.User.findByEmail(email);
        if (!user) {
            const error = new Err_1.Err("Invalid email or password");
            error.setStatus(404);
            return next(error);
        }
        const comparePassword = user.compareHash(password);
        if (!comparePassword) {
            const error = new Err_1.Err("Invalid email or password");
            error.setStatus(404);
            return next(error);
        }
        req.session.isAuthenticated = true;
        req.session.user = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            accountType: user.accountType,
        };
        // res.setHeader("HX-Redirect", "/");
        // res.redirect("/");
        // return res.send();
        return (0, sendHTMXRedirect_1.sendHTMXRedirect)(req, res, next, "/");
    }
    catch (err) {
        const error = new Err_1.Err("Uh oh... there was a problem logging you in. Don't worry, that's on us. We've been notified and well get right on it.");
        error.setStatus(500);
        return next(error);
    }
});
exports.postLogin = postLogin;
const postLogout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.session.destroy((err) => {
            if (err) {
                throw err;
            }
            return res.redirect("/");
        });
    }
    catch (err) {
        console.warn(err);
        const error = new Err_1.Err("Error logging you out.");
        error.setStatus(500);
        return next(error);
    }
});
exports.postLogout = postLogout;
