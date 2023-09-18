import { Context } from 'hono'
import { addItem, listItems } from '../models/komments.models'
import { comments } from '../../drizzle/schema';

type Comment = typeof comments.$inferInsert;

export const addComment = async (c: Context) => {
    const body = await c.req.json();
    const addedComment = await addItem(c, body);
    return c.json(addedComment)
}

export const listComments = async (c: Context) => {
    const comments = await listItems(c);
    return c.json(comments);
}