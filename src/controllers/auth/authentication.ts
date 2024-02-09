import { NextFunction, Request, Response } from "express";
import { User } from "../../models/user";
import { Err } from "../../utils/errors/Err";

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
    // if (await User.findByEmail(email)) {
    //   const error = new Err("That email is already in use");
    //   error.setStatus(422);
    //   return next(error);
    // } else
    console.log(await User.findByAccountType("owner"));
    if (await User.findByAccountType("owner")) {
      const error = new Err(
        "New users must be invited by the account owner. Please reach out and request an invite.",
      );
      error.setStatus(403);
      return next(error);
    }
    const user = User.createNewUser(username, email, password, "owner");
    user.save();
    console.log(user);

    // res.send("You're all signed up! Redirecting you to the login page...");
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

// Enable isAuthenticated as type on req.session
declare module "express-session" {
  interface SessionData {
    isAuthenticated: boolean;
  }
}
export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send("No credentials provided");
  }
  console.log(req.session);
  try {
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(404).send("No user found with that email.");
    }
    const comparePassword = user.compareHash(password);
    if (!comparePassword) {
      return res.status(404).send("Email or password is incorect.");
    }
    req.session.isAuthenticated = true;
    console.log(req.session);
    res.send(`Welcome ${user.username}`);
  } catch (err) {
    const error = new Err(
      "Uh oh... there was a problem logging you in. Don't worry, that's on us. We've been notified and well get right on it.",
    );
    error.setStatus(500);
    return next(error);
  }
};