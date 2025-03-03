import { model, Schema } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true, default: 0 },
    discount: { type: Number },
    finalPrice: { type: Number },
  },
  { timestamps: true }
);

const Cart = model<TCart>("Cart", cartSchema);

export default Cart;
