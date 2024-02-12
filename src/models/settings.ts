import { db } from "../db";
import * as schema from "../db/schema";
import { Err } from "../utils/errors/Err";

export class Settings {
  colors: schema.Colors | null;
  typography: schema.Typography | null;
  company: string | null;

  constructor(
    colors: schema.Colors | null,
    typography: schema.Typography | null,
    company: string | null,
  ) {
    this.colors = colors;
    this.typography = typography;
    this.company = company;
  }

  public static async getSettings() {
    const settings = await db.query.settings.findFirst();
    if (!settings) return undefined;
    return new Settings(settings.colors, settings.typography, settings.company);
  }

  public static async update<K extends keyof schema.Settings>(
    key: K,
    val: schema.Settings[K],
  ) {
    try {
      const settings = await db.query.settings.findFirst();
      if (!settings) {
        return await db
          .insert(schema.settings)
          .values({ [key]: val })
          .returning();
      }
      return await db
        .update(schema.settings)
        .set({ [key]: val })
        .returning();
    } catch (err) {
      const error = new Err("Error saving settings");
      error.setStatus(500);
      throw error;
    }
  }
}
