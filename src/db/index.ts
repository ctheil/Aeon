import { Client } from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then((res) => console.log("[db]: Database connected"));

export const db = drizzle(client, { schema: schema });
