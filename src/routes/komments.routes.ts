import { Hono } from 'hono'
import { addComment, deleteComment, getComment, listComments } from '../controllers/komments.controllers'

const komments = new Hono()

komments.get("/", listComments)
komments.get("/get/:id", getComment)
komments.delete("/del/:id", deleteComment)
komments.post("/add", addComment)

export default komments
