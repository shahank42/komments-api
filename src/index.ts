import { Hono } from "hono";
import komments from "./routes/komments.routes";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono!"));
app.route("/komments", komments);

export default app;
