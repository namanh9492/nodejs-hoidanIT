import { Request, Response } from "express";

const getHomePage = (req: Request, res: Response) => {
  return res.render("home.ejs");
};

export { getHomePage };
