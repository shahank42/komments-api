import { Hono } from 'hono'
import { addComment, listComments } from '../controllers/komments.controllers'

const komments = new Hono()

komments.get("/", listComments)
komments.post("/add", addComment)

export default komments
