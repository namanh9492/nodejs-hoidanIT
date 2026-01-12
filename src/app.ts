// const express = require("express");
import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.port;

app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/namanh", (req, res) => {
  res.send("Hello Nam Anh");
});

app.listen(port, () => {
  console.log(`env port: ${process.env.port}`);
});
