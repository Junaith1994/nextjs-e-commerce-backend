import { TUser } from "./users.interface";
import User from "./users.model";

const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  try {
    const result = await User.create(userData);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateUserInfoInDB = async (userId: string, updateDoc: TUser) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updateDoc },
      { returnNewDocument: true }
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const retrieveAllUsersFromDB = async () => {
  try {
    const result = await User.find({});
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const singleUserFromDB = async (id: string) => {
  try {
    const result = await User.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const removeUserFromDB = async (id: string) => {
  try {
    const result = await User.deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userServices = {
  createUserIntoDB,
  updateUserInfoInDB,
  retrieveAllUsersFromDB,
  singleUserFromDB,
  removeUserFromDB,
};
