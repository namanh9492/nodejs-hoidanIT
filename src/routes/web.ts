import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", (req, res) => {
    res.render("home");
  });

  router.get("/namanh", (req, res) => {
    res.send("Hello Nam Anh");
  });

  app.use("/", router);
};

export default webRoutes;
