import { Request, Response } from "express";
import { inventoriesServices } from "./inventories.services";

// Create product
const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const productData = req.body.productData;
    const result = await inventoriesServices.createProductIntoDB(productData);
    return res.status(201).json({
      message: result && "Product Created Successfully",
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

// Update a product
const updateProductInfo = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const { productUpdateInfo } = req.body;

    const result = await inventoriesServices.updateProductInfoInDB(
      id,
      productUpdateInfo
    );
    return res.status(201).json({
      message: result && "Product Updated Successfully",
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

// Retrieve all products
const getAllProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const result = await inventoriesServices.retrieveAllProductsFromDB();
    return res.status(201).json({
      message: result && "All Products Retrieved Successfully",
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

// Search products
const getSearchedProducts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const searchQuery = req.query.q as string;

    const searchResult = await inventoriesServices.retrieveQueryProductsFromDB(
      searchQuery
    );
    return res.status(201).json({
      message: searchResult && "Search Results Retrieved Successfully",
      data: searchResult,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Single Product
const getSingleProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await inventoriesServices.singleProductFromDB(id);
    return res.status(201).json({
      message: result && "Single Product Retrieved Successfully",
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

// Remove single product
const removeSingleProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const result = await inventoriesServices.removeProductFromDB(id);
    return res.status(201).json({
      message: result && "Deleted Product Successfully",
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

export const inventoriesController = {
  createProduct,
  updateProductInfo,
  getAllProducts,
  getSingleProduct,
  removeSingleProduct,
  getSearchedProducts,
};
