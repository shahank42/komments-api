import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
    id: text("id").primaryKey(),
    author: text("author").notNull(),
})