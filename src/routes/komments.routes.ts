import { Hono } from 'hono'
import { listComments } from '../controllers/komments.controllers'

const komments = new Hono()

komments.get("/", listComments)

export default komments
