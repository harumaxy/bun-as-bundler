import index from "../index.html";
import about from "../about.html";
import { Hono } from "hono";

const app = new Hono();

app.get("/hono", (c) => c.text("This is Hono response"));

Bun.serve({
  static: {
    "/": index,
    "/about": about,
  },
	development: true,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/hono") {
      return app.fetch(req); // Hono アプリケーションでレスポンスをハンドル
    }
    return new Response("This is default response"); // 標準的な Response オブジェクトを返すことも可能
  },
});

console.log("Server is running on http://localhost:3000");
