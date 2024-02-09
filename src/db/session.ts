import connectPgSimple from "connect-pg-simple";
import express from "express";
import session from "express-session";
import { dbPool } from ".";

declare module "express-session" {
  interface SessionData {
    isAuthenticated: boolean;
  }
}

if (!process.env.SESSION_SECRET) {
  throw new Error("No session secret found in env.");
}
const pgSession = connectPgSimple(session);
export const store = new pgSession({
  pool: dbPool,
  tableName: "user_sessions",
  createTableIfMissing: true,
});
