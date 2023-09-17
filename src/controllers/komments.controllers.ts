import { Context } from 'hono'
import { listItems } from '../models/komments.models'

export const listComments = async (c: Context) => {
    const comments = await listItems(c);
    return c.json(comments);
}