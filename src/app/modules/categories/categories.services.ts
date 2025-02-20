import { TProductCategory } from "./categories.interface";
import { ProductCategoryModel } from "./categories.model";

const createCategoryIntoDB = async (doc: string): Promise<TProductCategory> => {
  try {
    const result = await ProductCategoryModel.create(doc);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const retrieveCategoriesFromDB = async () => {
  try {
    const result = await ProductCategoryModel.find({});
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCategoryInDB = async (
  categoryId: string,
  updateDoc: TProductCategory
) => {
  try {
    const result = ProductCategoryModel.findOneAndUpdate(
      { _id: categoryId },
      { $set: updateDoc },
      { includeResultMetadata: true }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteCategoryFromDB = async (id: string) => {
  try {
    const result = await ProductCategoryModel.deleteOne({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const categoriesServices = {
  createCategoryIntoDB,
  retrieveCategoriesFromDB,
  updateCategoryInDB,
  deleteCategoryFromDB,
};
