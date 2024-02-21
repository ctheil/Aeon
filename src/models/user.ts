import { db } from "../db";
import * as schema from "../db/schema";
import bcrypt from "bcrypt";
import { Err } from "../utils/errors/Err";

export class User {
  firstName: string;
  lastName: string;
  email: string;
  accountType: schema.AccountType;
  private hashedPassword: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    hashedPassword: string,
    accountType?: schema.AccountType,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.accountType = accountType || "unassigned";
  }

  public static createNewUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    accountType: schema.AccountType,
  ): User {
    const hashed = User.hashPassword(password);
    return new User(firstName, lastName, email, hashed, accountType);
  }

  static async findByEmail(email: string): Promise<User | undefined> {
    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, email),
    });
    if (!user) return;
    return new User(
      user.firstName,
      user.lastName,
      user.email,
      user.hashedPassword,
      user.accountType,
    );
  }
  static async findByAccountType(
    type: schema.AccountType,
  ): Promise<User | undefined> {
    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.accountType, type),
    });
    if (!user) return;
    return new User(
      user.firstName,
      user.lastName,
      user.email,
      user.hashedPassword,
      user.accountType,
    );
  }

  async save() {
    try {
      return await db.insert(schema.users).values({
        email: this.email,
        hashedPassword: this.hashedPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        accountType: this.accountType,
      });
    } catch (err) {
      const error = new Err(`Error saving user: ${err}`);
      error.setStatus(500);
      throw error;
    }
  }

  private static hashPassword(password: string): string {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      return hash;
    } catch (err) {
      const error = new Err(`Error hashing password: ${err}`);
      error.setStatus(500);
      console.log(error);
      throw error;
    }
  }
  public compareHash(password: string): boolean {
    try {
      if (!this.hashedPassword) {
        throw new Error("No hashed password...");
      }
      const compare = bcrypt.compareSync(password, this.hashedPassword);
      return compare;
    } catch (err) {
      const error = new Err("Error comparing passwords");
      error.setStatus(500);
      throw error;
    }
  }
}
