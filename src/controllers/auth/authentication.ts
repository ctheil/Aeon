import { NextFunction, Request, Response } from "express";
import { User } from "../../models/user";
import { Err } from "../../utils/errors/Err";
import { sendHTMXRedirect } from "../../utils/sendHTMXRedirect";
import { ValidationError, validationResult } from "express-validator";
import errorFormatter from "../../utils/errors/validationErrorFormatter";

export const getWelcome = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuthenticated) {
    return res.redirect("/");
  }
  return res.render("auth/welcome", {
    pageTitle: "Welcome",
    errorMessage: req.flash("error"),
  });
};

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuthenticated) {
    return res.redirect("/");
  }
  const error = req.flash("error");

  return res.render("auth/login", {
    pageTitle: "Login",
    error: error,
  });
};
export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { firstName, lastName, email, password } = req.body;
  const errors = validationResult(req);
  console.log("[ERRORS: ]", errors.isEmpty(), errors.array());
  if (!errors.isEmpty()) {
    const inputErrors = errorFormatter(errors.array() as ValidationError[]);
    console.log(inputErrors);
    console.log("[inputErrors: ]", inputErrors);
    return res.render("auth/welcome", {
      pageTitle: "Welcome",
      errors: req.flash("error"),
      inputErrors,
    });
  }
  if (req.session.isAuthenticated) {
    return res.redirect("/");
  }
  // user exists?
  try {
    if (await User.findByAccountType("owner")) {
      const error = new Err(
        "New users must be invited by the account owner. Please reach out and request an invite.",
      );
      error.setStatus(403);
      return next(error);
    }
    const user = User.createNewUser(
      firstName,
      lastName,
      email,
      password,
      "owner",
    );
    user.save();

    console.log("[auth]: signup success");
    res.redirect("/v1/auth/login");
  } catch (err) {
    console.error(err);
    const error = new Err(
      "Uh oh... there was a problem signing you up. Don't worry, that's on us. We've been notified and well get right on it.",
    );
    error.setStatus(500);
    return next(error);
  }
};

export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.render("auth/login", {
      pageTitle: "Login",
      inputErrors: errorFormatter(error.array() as ValidationError[]),
    });
  }
  try {
    const user = await User.findByEmail(email);

    if (!user) {
      req.flash("error", "invalid email or password");
      console.log("redirecting... no user");
      return res.redirect("/v1/auth/login");
    }
    const comparePassword = user.compareHash(password);
    if (!comparePassword) {
      console.log("redirecting... invalid password");
      req.flash("error", "invalid email or password");
      return res.redirect("/v1/auth/login");
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
    return sendHTMXRedirect(req, res, next, "/");
  } catch (err) {
    const error = new Err(
      "Uh oh... there was a problem logging you in. Don't worry, that's on us. We've been notified and well get right on it.",
    );
    error.setStatus(500);
    return next(error);
  }
};

export const postLogout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      return res.redirect("/");
    });
  } catch (err) {
    console.warn(err);
    const error = new Err("Error logging you out.");
    error.setStatus(500);
    return next(error);
  }
};
