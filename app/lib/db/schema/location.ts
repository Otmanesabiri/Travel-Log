import { integer, real, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";
import { users } from "./user";

export const locations = sqliteTable("locations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  address: text("address"),
  latitude: real("latitude").notNull(),
  longitude: real("longitude").notNull(),
  imageUrl: text("image_url"),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
}, t => ({
  unqNameUserId: unique().on(t.name, t.userId),
}));

export type Location = typeof locations.$inferSelect;
export type NewLocation = typeof locations.$inferInsert;
