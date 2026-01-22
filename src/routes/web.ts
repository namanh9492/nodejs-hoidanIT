import express, { Express } from "express";
import { getHomePage } from "../controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/namanh", (req, res) => {
    res.send("Hello Nam Anh");
  });

  app.use("/", router);
};

export default webRoutes;
