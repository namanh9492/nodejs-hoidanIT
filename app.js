const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // return "Hello World!";
  res.send("Hello world!");
});

app.get("/namanh", (req, res) => {
  res.send("Hello Nam Anh");
});

app.listen(port, () => {
  console.log(`running at ${port}`);
});
