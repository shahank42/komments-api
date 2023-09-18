import { sql } from "drizzle-orm";
import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  author: text("author").notNull(),
  content: text("content").notNull(),
  time: text("time").default(sql`CURRENT_TIME`),
  date: text("date").default(sql`CURRENT_DATE`),
  upvotes: integer("upvotes").default(0),
});
