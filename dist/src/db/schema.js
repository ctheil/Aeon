"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = exports.users = exports.accountTypeEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accountTypeEnum = (0, pg_core_1.pgEnum)("account_type", [
    "owner",
    "admin",
    "editor",
    "member",
    "unassigned",
]);
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    firstName: (0, pg_core_1.text)("first_name").notNull(),
    lastName: (0, pg_core_1.text)("last_name").notNull(),
    hashedPassword: (0, pg_core_1.text)("hashed_password").notNull(),
    accountType: (0, exports.accountTypeEnum)("account_type").notNull(),
});
exports.settings = (0, pg_core_1.pgTable)("settings", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    colors: (0, pg_core_1.json)("colors").$type(),
    typography: (0, pg_core_1.json)("typography").$type(),
});
