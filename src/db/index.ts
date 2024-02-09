import { Client, Pool } from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

dotenv.config();

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then((res) => console.log("[db]: Database connected"))
  .catch((err) => console.log(`[db]: Error connecting to db: ${err}`));
// client
//   .connect()
//   .then((res) => console.log("[db]: Database connected"))
//   .catch((err) => console.log(`[db]: Error connecting to db: ${err}`));

export const db = drizzle(pool, { schema: schema });
export const dbPool = pool;
