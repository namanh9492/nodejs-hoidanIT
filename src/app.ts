// const express = require("express");
import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";

const app = express();
const port = process.env.port;

app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", __dirname + "/views");

webRoutes(app);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`env port: ${process.env.port}`);
});
