import { comments } from "../../drizzle/schema";
import { Context } from "hono";
import { buildDbClient } from "./client";
import { eq } from "drizzle-orm";

export const getItem = async function (c: Context, id: number) {
  const db = buildDbClient(c);
  const result = await db.select().from(comments).where(eq(comments.id, id));
  return result;
};

export const addItem = async function (
  c: Context,
  commentItem: { author: string; content: string; upvotes?: number }
) {
  const db = buildDbClient(c);
  const result = await db.insert(comments).values(commentItem).returning();
  return result;
};



export const listItems = async (c: Context) => {
  const db = buildDbClient(c);
  const result = await db.select().from(comments);
  return result;
};

export const deleteItem = async (c: Context, id: number) => {
  const db = buildDbClient(c);
  const result = await db.delete(comments).where(eq(comments.id, id));
};
