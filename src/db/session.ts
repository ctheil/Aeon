import pg from "pg";
import session from "express-session";
import express from "express";
import ConnectPgSimple from "connect-pg-simple";
import dotenv from "dotenv";

dotenv.config();

const sessionRouter = express.Router();

// const store = new import("connect-pg-simple")(session)

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  // Insert pool options here
});

// app.use(
//   expressSession({
//     store: new pgSession({
//       pool: pgPool, // Connection pool
//       tableName: "user_sessions", // Use another table-name than the default "session" one
//       // Insert connect-pg-simple options here
//     }),
//     secret: process.env.FOO_COOKIE_SECRET,
//     resave: false,
//     cookie:pgPool { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
//     // Insert express-session options here
//   }),
// )
//
const store = new ConnectPgSimple(session);

sessionRouter.use(
  session({
    store: store({
      // Insert connect-pg-simple options here
      pgPool: pgPool
    }),
    secret: process.env.SESSION_SECRET!,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    // Insert express-session options here
  }),
);
