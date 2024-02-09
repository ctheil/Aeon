import {
  pgTable,
  serial,
  primaryKey,
  text,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

export const accountTypeEnum = pgEnum("account_type", [
  "owner",
  "admin",
  "editor",
  "member",
  "unassigned",
]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  userName: text("user_name").notNull(),
  hashedPassword: text("hashed_password").notNull(),
  accountType: accountTypeEnum("account_type").notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type AccountType =
  | "owner"
  | "admin"
  | "editor"
  | "member"
  | "unassigned";
