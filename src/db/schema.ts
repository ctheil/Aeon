import { pgTable, serial, text, pgEnum, json } from "drizzle-orm/pg-core";

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
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
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

export type Colors = {
  "--l-p-600": string;

  "--l-p-500": string;
  "--l-p-400": string;
  "--l-p-bg": string;

  "--l-s-600": string;
  "--l-s-500": string;
  "--l-s-400": string;
  "--l-s-bg": string;

  "--l-bg": string;
  "--l-bg-a": string;
  "--l-text": string;
  "--l-text-a": string;

  "--d-p-600": string;
  "--d-p-500": string;
  "--d-p-400": string;
  "--d-p-bg": string;

  "--d-s-600": string;
  "--d-s-500": string;
  "--d-s-400": string;
  "--d-s-bg": string;

  "--d-bg": string;
  "--d-bg-a": string;
  "--d-text": string;
  "--d-text-a": string;
};

export type Typography = {
  link: string;
  family: string;
  name: string;
};

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  colors: json("colors").$type<Colors>(),
  typography: json("typography").$type<Typography>(),
  company: text("company_name"),
});

export type Settings = typeof settings.$inferSelect;
