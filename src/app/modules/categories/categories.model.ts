import { Schema, model } from "mongoose";
import { TProductCategory } from "./categories.interface";

const ProductCategorySchema = new Schema<TProductCategory>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { versionKey: false }
);

export const ProductCategoryModel = model<TProductCategory>(
  "ProductCategory",
  ProductCategorySchema
);
