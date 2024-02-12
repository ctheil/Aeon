"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const connect_pg_simple_1 = __importDefault(require("connect-pg-simple"));
const express_session_1 = __importDefault(require("express-session"));
const _1 = require(".");
if (!process.env.SESSION_SECRET) {
    throw new Error("No session secret found in env.");
}
const pgSession = (0, connect_pg_simple_1.default)(express_session_1.default);
exports.store = new pgSession({
    pool: _1.dbPool,
    tableName: "user_sessions",
    createTableIfMissing: true,
});
