import { db } from "../db";
import * as schema from "../db/schema";
import bcrypt from "bcrypt";
import { Err } from "../utils/errors/Err";

export class User {
  username: string;
  email: string;
  private hashedPassword: string;

  constructor(username: string, email: string, hashedPassword: string) {
    this.username = username;
    this.email = email;
    this.hashedPassword = hashedPassword;
  }

  public static createNewUser(
    username: string,
    email: string,
    password: string,
  ): User {
    const hashed = User.hashPassword(password);
    return new User(username, email, hashed);
  }

  static async findByEmail(email: string): Promise<User | undefined> {
    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, email),
    });
    if (!user) return;
    return new User(user.userName, user.email, user.hashedPassword);
  }

  async save() {
    try {
      return await db.insert(schema.users).values({
        email: this.email,
        hashedPassword: this.hashedPassword,
        userName: this.username,
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
