import getConnection from "../config/db";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../config/client";

const handleCreateUser = async (
  fullName: String,
  email: String,
  address: String,
) => {
  // const prisma = new PrismaClient();

  await prisma.user.create({
    data: {
      fullName: fullName as string,
      username: email as string,
      address: address as string,
      password: "",
      accountType: "",
    },
  });
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const handleDeleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: +id },
  });
};

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id: +id } });
  return user;
};

const handleUpdateUserById = async (
  id: string,
  email: string,
  address: string,
  fullName: string,
) => {
  const updateUser = await prisma.user.update({
    where: { id: +id },
    data: {
      fullName: fullName as string,
      username: email as string,
      address: address as string,
      password: "",
      accountType: "",
    },
  });

  return updateUser;
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  handleUpdateUserById,
};
