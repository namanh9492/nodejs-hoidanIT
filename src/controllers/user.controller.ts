import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.services";

const getHomePage = async (req: Request, res: Response) => {
  // get users
  const listUsers = await getAllUsers();
  // console.log("check users:", listUsers);

  return res.render("home", { users: listUsers });
};

const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postCreateUserPage = async (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;

  await handleCreateUser(fullName, email, address);

  return res.redirect("/");
};

const postDeleteUserPage = (req: Request, res: Response) => {
  // console.log(req.params.id);
  const { id } = req.params;
  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
};
