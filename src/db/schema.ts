import {
  pgTable,
  serial,
  primaryKey,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  userName: text("user_name").notNull(),
  hashedPassword: text("hashed_password").notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
