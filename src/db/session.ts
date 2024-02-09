import express from "express";

declare module "express-session" {
  interface SessionData {
    isAuthenticated: boolean;
  }
}
