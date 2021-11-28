import next from "next";
import express, { Request, Response } from "express";
const port = parseInt(process.env.PORT || "4000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(port, (err: any) => {
    if (err) throw err;
    console.log(
      `> Ready on ${process.env.CLIENT_URL || `http://localhost:${port}`}`
    );
  });
});
