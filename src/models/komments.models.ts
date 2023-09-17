import { comments } from "../../drizzle/schema";
import { Context } from 'hono'
import { buildDbClient } from "./client";


export const listItems = async (c: Context) => {
    const db = buildDbClient(c);
    const result = await db.select().from(comments);
    return result;
}
