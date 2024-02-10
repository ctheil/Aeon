import { NextFunction, Request, Response } from "express";
import { User } from "../../models/user";
import { Err } from "../../utils/errors/Err";
import { sendHTMXRedirect } from "../../utils/sendHTMXRedirect";

export const getWelcome = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuthenticated) {
    return res.redirect("/");
  }
  return res.render("auth/welcome", {
    pageTitle: "Welcome",
  });
};

export const getLogin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuthenticated) {
    return res.redirect("/");
  }
  return res.render("auth/login", {
    pageTitle: "Login",
  });
};
export const postSignup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(422).send("No credentials provided");
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
    const user = User.createNewUser(username, email, password, "owner");
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
  if (!email || !password) {
    return res.status(422).send("No credentials provided");
  }
  try {
    const user = await User.findByEmail(email);

    if (!user) {
      const error = new Err("Invalid email or password");
      error.setStatus(404);
      return next(error);
    }
    const comparePassword = user.compareHash(password);
    if (!comparePassword) {
      const error = new Err("Invalid email or password");
      error.setStatus(404);
      return next(error);
    }
    req.session.isAuthenticated = true;
    req.session.user = {
      email: user.email,
      username: user.username,
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
