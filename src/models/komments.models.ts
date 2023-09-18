import { comments } from "../../drizzle/schema";
import { Context } from 'hono'
import { buildDbClient } from "./client";

type Comment = typeof comments.$inferInsert;

export const addItem = async function (c: Context, commentItem: any) {
    const db = buildDbClient(c);
    const result = await db.insert(comments).values(commentItem).returning();
    return result;
}

export const listItems = async (c: Context) => {
    const db = buildDbClient(c);
    const result = await db.select().from(comments);
    return result;
}
