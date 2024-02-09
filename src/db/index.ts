import { Client } from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

dotenv.config();

console.log(process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client
  .connect()
  .then((res) => console.log("[db]: Database connected"))
  .catch((err) => console.log(`[db]: Error connecting to db: ${err}`));

export const db = drizzle(client, { schema: schema });
