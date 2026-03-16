import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { locationLogs } from "./location-log";
import { users } from "./user";

export const locationLogImages = sqliteTable("location_log_images", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull(),
  locationLogId: integer("location_log_id").notNull().references(() => locationLogs.id, { onDelete: "cascade" }),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
});

export type LocationLogImage = typeof locationLogImages.$inferSelect;
export type NewLocationLogImage = typeof locationLogImages.$inferInsert;
