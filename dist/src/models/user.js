"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../db");
const schema = __importStar(require("../db/schema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Err_1 = require("../utils/errors/Err");
class User {
    constructor(firstName, lastName, email, hashedPassword, accountType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.accountType = accountType || "unassigned";
    }
    static createNewUser(firstName, lastName, email, password, accountType) {
        const hashed = User.hashPassword(password);
        return new User(firstName, lastName, email, hashed, accountType);
    }
    static findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.db.query.users.findFirst({
                where: (user, { eq }) => eq(user.email, email),
            });
            if (!user)
                return;
            return new User(user.firstName, user.lastName, user.email, user.hashedPassword, user.accountType);
        });
    }
    static findByAccountType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.db.query.users.findFirst({
                where: (user, { eq }) => eq(user.accountType, type),
            });
            if (!user)
                return;
            return new User(user.firstName, user.lastName, user.email, user.hashedPassword, user.accountType);
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield db_1.db.insert(schema.users).values({
                    email: this.email,
                    hashedPassword: this.hashedPassword,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    accountType: this.accountType,
                });
            }
            catch (err) {
                const error = new Err_1.Err(`Error saving user: ${err}`);
                error.setStatus(500);
                throw error;
            }
        });
    }
    static hashPassword(password) {
        try {
            const salt = bcrypt_1.default.genSaltSync(10);
            const hash = bcrypt_1.default.hashSync(password, salt);
            return hash;
        }
        catch (err) {
            const error = new Err_1.Err(`Error hashing password: ${err}`);
            error.setStatus(500);
            console.log(error);
            throw error;
        }
    }
    compareHash(password) {
        try {
            if (!this.hashedPassword) {
                throw new Error("No hashed password...");
            }
            const compare = bcrypt_1.default.compareSync(password, this.hashedPassword);
            return compare;
        }
        catch (err) {
            const error = new Err_1.Err("Error comparing passwords");
            error.setStatus(500);
            throw error;
        }
    }
}
exports.User = User;
