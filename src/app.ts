// const express = require("express");
import express from "express";
import "dotenv/config";
import webRoutes from "./routes/web";
import getConnection from "./config/db";

const app = express();
const port = process.env.port;

// config view engine
app.set("view engine", "ejs");
// app.set("views", "./src/views");
app.set("views", __dirname + "/views");

// config req.body to get info from user (ex: from create user page)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files (img - css - js)
app.use(express.static("public"));

// config routes
webRoutes(app);

getConnection();

app.listen(port, () => {
  console.log(`env port: ${process.env.port}`);
});
