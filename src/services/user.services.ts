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
      name: fullName as string,
      email: email as string,
      address: address as string,
    },
  });
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection();

    const sql = "DELETE FROM `users` WHERE `id` = ? LIMIT 1";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getUserById = async (id: string) => {
  try {
    const connection = await getConnection();
    const sql = "SELECT * FROM `users` WHERE `id` = ?";
    const values = [id];
    const [result, fields] = await connection.execute(sql, values);
    return result[0];
  } catch (err) {
    console.log(err);
    return [];
  }
};

const handleUpdateUserById = async (
  id: string,
  email: string,
  address: string,
  fullName: string,
) => {
  try {
    const connection = await getConnection();
    const sql =
      "UPDATE `users` SET `name` = ?, `email` = ?, `address`= ? WHERE `id` = ?";
    const values = [fullName, email, address, id];
    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  handleUpdateUserById,
};
