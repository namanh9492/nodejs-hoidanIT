// const express = require("express");
import express from "express";
import "dotenv/config";
import path from "path";
import webRoutes from "./routes/web";
import initDatabase from "./config/seed";

const app = express();
const port = process.env.port;

// config view engine
app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", path.join(__dirname, "../src/views"));

// config req.body to get info from user (ex: from create user page)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files (img - css - js)
app.use(express.static("public"));

// config routes
webRoutes(app);

// seeding data
initDatabase();

app.listen(port, () => {
  console.log(`env port: ${process.env.port}`);
});
