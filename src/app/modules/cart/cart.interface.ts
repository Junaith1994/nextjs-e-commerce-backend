import { Types } from "mongoose";

export type TCartItem = {
  productId: Types.ObjectId;
  quantity: number;
  price: number;
};

export type TCart = {
  userId: Types.ObjectId;
  items: TCartItem[];
  totalPrice: number;
  discount?: number;
  finalPrice?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
