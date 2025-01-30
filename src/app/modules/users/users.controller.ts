import { Request, Response } from "express";
import { userServices } from "./users.services";
import { TUser } from "./users.interface";

// Create User
const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData = req.body.user;
    const result = await userServices.createUserIntoDB(userData);
    return res.status(201).json({
      message: result && "User Created Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Update a User
const UpdateUserInfo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.body;
    const { userUpdateInfo } = req.body;

    const result = await userServices.updateUserInfoInDB(_id, userUpdateInfo);
    return res.status(201).json({
      message: result && "User Updated Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Retrieve all users
const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const result = await userServices.retrieveAllUsersFromDB();
    return res.status(201).json({
      message: result && "All Users Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

const getSingleUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await userServices.singleUserFromDB(id);
    return res.status(201).json({
      message: result && "Single User Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

export const userController = {
  createUser,
  UpdateUserInfo,
  getAllUsers,
  getSingleUser,
};
