import { Request, Response } from "express";
import {
  getAllUsers,
  handleCreateUser,
  handleDeleteUser,
  getUserById,
  handleUpdateUserById,
} from "../services/user.services";

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

  const a = await handleCreateUser(fullName, email, address);

  return res.redirect("/");
};

const postDeleteUserPage = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  const { id } = req.params;

  await handleDeleteUser(id);

  return res.redirect("/");
};

const getViewUserPage = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await getUserById(id);

  return res.render("view-user", { id: id, user: user });
};

const postUpdateUserPage = async (req: Request, res: Response) => {
  const { id, email, address, fullName } = req.body;

  const a = await handleUpdateUserById(id, email, address, fullName);

  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUserPage,
  postCreateUserPage,
  postDeleteUserPage,
  getViewUserPage,
  postUpdateUserPage,
};
