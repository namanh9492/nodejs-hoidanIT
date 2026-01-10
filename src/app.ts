// const express = require("express");
import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello world! nodemon");
});

app.get("/namanh", (req, res) => {
  res.send("Hello Nam Anh");
});

app.listen(port, () => {
  console.log(`running at ${port}`);
  console.log(`env port: ${process.env.port}`);
});
