import mongoose, { Schema, Document } from "mongoose";
import { TProduct } from "./inventories.interface";

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  category: { type: String, required: true },
  productImages: { type: [String], required: true },
});

// Search index for text search
productSchema.index({ name: "text", description: "text" });

const Product = mongoose.model<TProduct>("Product", productSchema);

export default Product;
