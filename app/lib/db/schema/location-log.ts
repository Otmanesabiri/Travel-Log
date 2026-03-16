import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { locations } from "./location";
import { users } from "./user";

export const locationLogs = sqliteTable("location_logs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  startedAt: integer("started_at", { mode: "timestamp" }),
  endedAt: integer("ended_at", { mode: "timestamp" }),
  locationId: integer("location_id").notNull().references(() => locations.id, { onDelete: "cascade" }),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
});

export type LocationLog = typeof locationLogs.$inferSelect;
export type NewLocationLog = typeof locationLogs.$inferInsert;
