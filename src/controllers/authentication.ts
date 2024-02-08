import { NextFunction, Request, Response } from "express";
import { User } from "../models/user";
import { Err } from "../utils/errors/Err";

export const getSignup = (req: Request, res: Response, next: NextFunction) => {
  return res.render("auth/signup", {
    pageTitle: "Signup",
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
  // user exists?
  try {
    if (await User.findByEmail(email)) {
      const error = new Err("That email is already in use");
      error.setStatus(422);
      return next(error);
    }
    const user = new User(username, email, password);
    user.save();
    console.log(user);

    res.send("You're all signed up! Redirecting you to the login page...");
  } catch (err) {
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
      return res.status(404).send("No user found with that email.");
    }
    console.log(user);
    const comparePassword = user.compareHash(password);
    console.log(comparePassword);
    if (!comparePassword) {
      return res.status(404).send("Email or password is incorect.");
    }
    res.send(`Welcome ${user.username}`);
  } catch (err) {
    const error = new Err(
      "Uh oh... there was a problem logging you in. Don't worry, that's on us. We've been notified and well get right on it.",
    );
    error.setStatus(500);
    return next(error);
  }
};
