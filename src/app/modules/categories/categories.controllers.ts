import { Request, Response } from "express";
import { categoriesServices } from "./categories.services";

// Create category
const createCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { data } = req.body;
    const result = await categoriesServices.createCategoryIntoDB(data);
    return res.status(201).json({
      message: result && "Category Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Retrieve all catagories
const retrieveAllCategories = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await categoriesServices.retrieveCategoriesFromDB();
    return res.status(201).json({
      message: result && "All Categories Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Update category
const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const { updateDoc } = req.body;
    const result = await categoriesServices.updateCategoryInDB(id, updateDoc);
    return res.status(201).json({
      message: result && `${updateDoc} in Category Updated Successfully`,
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Delete category
const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await categoriesServices.deleteCategoryFromDB(id);
    return res.status(201).json({
      message: result && "Category Deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

export const categoriesControllers = {
  createCategories,
  retrieveAllCategories,
  updateCategory,
  deleteCategory,
};
