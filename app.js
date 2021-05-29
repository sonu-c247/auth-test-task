require("dotenv").config();

import bodyParser from "body-parser";
import express from "express";
import http from "http";
import path from "path";
import ApiRouter from "./src/routes";

const app = express();

app.use(bodyParser.json({ limit: "50m" }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", ApiRouter);

const server = http.createServer(app);
const port = process.env.PORT;

server
  .listen(port)
  .on("listening", () =>
    console.log(`App Started on PORT ${port} in ${process.env.NODE_ENV} mode!`)
  )
  .on("error", (err) => {
    console.log(`App Startup failed with`, err);
    process.exit();
  });
