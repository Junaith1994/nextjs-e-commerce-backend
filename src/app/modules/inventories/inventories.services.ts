import { TProduct } from "./inventories.interface";
import Product from "./inventories.model";

const createProductIntoDB = async (
  ProductData: TProduct
): Promise<TProduct> => {
  try {
    const result = await Product.create(ProductData);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateProductInfoInDB = async (
  productId: string,
  updateDoc: TProduct
) => {
  try {
    const result = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: updateDoc },
      { returnNewDocument: true }
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const retrieveAllProductsFromDB = async () => {
  try {
    const result = await Product.find({});
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const retrieveQueryProductsFromDB = async (searchParams: string) => {
  try {
    const searchResult = await Product.find({
      $text: { $search: searchParams },
    });
    return searchResult;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const singleProductFromDB = async (id: string) => {
  try {
    const result = await Product.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const removeProductFromDB = async (id: string) => {
  try {
    const result = await Product.deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const inventoriesServices = {
  createProductIntoDB,
  updateProductInfoInDB,
  retrieveAllProductsFromDB,
  singleProductFromDB,
  removeProductFromDB,
  retrieveQueryProductsFromDB,
};
