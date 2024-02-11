import {
  pgTable,
  serial,
  primaryKey,
  text,
  varchar,
  pgEnum,
  json,
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

type Colors = {
  "l-primary-900": string;
  "l-primary-800": string;
  "l-primary-700": string;
  "l-primary-600": string;
  "l-primary-500": string;
  "l-primary-400": string;
  "l-primary-300": string;
  "l-primary-200": string;
  "l-primary-100": string;

  "l-neutral-900": string;
  "l-neutral-800": string;
  "l-neutral-700": string;
  "l-neutral-600": string;
  "l-neutral-500": string;
  "l-neutral-400": string;
  "l-neutral-300": string;
  "l-neutral-200": string;
  "l-neutral-100": string;

  "d-primary-900"?: string;
  "d-primary-800"?: string;
  "d-primary-700"?: string;
  "d-primary-600"?: string;
  "d-primary-500"?: string;
  "d-primary-400"?: string;
  "d-primary-300"?: string;
  "d-primary-200"?: string;
  "d-primary-100"?: string;

  "d-neutral-900"?: string;
  "d-neutral-800"?: string;
  "d-neutral-700"?: string;
  "d-neutral-600"?: string;
  "d-neutral-500"?: string;
  "d-neutral-400"?: string;
  "d-neutral-300"?: string;
  "d-neutral-200"?: string;
  "d-neutral-100"?: string;
};

type Typography = {
  link: string;
  family: string;
};

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  colors: json("colors").$type<Colors>(),
  typography: json("typography").$type<Typography>(),
});
