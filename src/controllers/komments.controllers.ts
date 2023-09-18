import { Context } from "hono";
import { addItem, deleteItem, getItem, listItems } from "../models/komments.models";

export const getComment = async (c: Context) => {
  const id = c.req.param("id");
  const comment = await getItem(c, parseInt(id));
  return c.json(comment);
};

export const addComment = async (c: Context) => {
  const body = await c.req.json();
  const addedComment = await addItem(c, body);
  return c.json(addedComment);
};

export const listComments = async (c: Context) => {
  const comments = await listItems(c);
  return c.json(comments);
};

export const deleteComment = async (c: Context) => {
    const id = c.req.param("id");
    const deletedComment = await deleteItem(c, parseInt(id));
    return c.json(deletedComment);
}