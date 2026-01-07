// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/namanh", (req, res) => {
  res.send("Hello Nam Anh");
});

app.listen(port, () => {
  console.log(`running at ${port}`);
});
