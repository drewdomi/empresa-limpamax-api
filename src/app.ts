import http from "node:http";
import express from "express";
import cors from "cors";
import { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.get("/", (_req: Request, res: Response) => {
  res.send("API Running at port 3000");
});

const server = http.createServer(app);
server.on("error", (error) => {
  console.log(error);
});

server.listen(port, () => {
  console.log("API running on port " + port);
});