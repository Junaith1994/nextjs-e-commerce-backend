import { Types } from "mongoose";
import { TProduct } from "../inventories/inventories.interface";
// import Product from "../inventories/inventories.model";
import { TCart, TCartItem } from "./cart.interface";
import Cart from "./cart.model";
import Product from "../inventories/inventories.model";

const createOrUpdateUserCartIntoDB = async (
  userId: Types.ObjectId,
  productId: Types.ObjectId,
  quantity: number
): Promise<TCart> => {
  // const { userId } = cartData;
  try {
    const product = await Product.findOne({ _id: productId });

    if (!product) throw new Error("Product not found");

    let userCart = await Cart.findOne({ userId });
    if (userCart) {
      const existingItem = userCart.items.find(
        (item) => item.productId.toString() === productId.toString()
      );
      if (existingItem) {
        existingItem.quantity += quantity;
        // existingItem.price += product.price;
      } else {
        userCart.items.push({ productId, quantity, price: product.price });
      }

      userCart.totalPrice = Math.ceil(
        userCart.items.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        )
      );
      await userCart.save();
    } else {
      userCart = await Cart.create({
        userId,
        items: [{ productId, quantity, price: product.price }],
        totalPrice: product.price * quantity,
      });
    }

    return userCart;
    // If user cart doesn't exist
    /* if (!userCart) {
      const result = await Cart.create(cartData);
      return result;
    }

    const updateItemsToCart = await Cart.findOneAndUpdate(
      { userId: userId, "items.productId": productId },
      {
        $push: { items: { productId, quantity, price: price } },
        $inc: { totalPrice: price * quantity },
      },
      { upsert: true, new: true }
    );

    return updateItemsToCart; */
    // const existingUserCart: TCart = await Cart.findOne({ userId: userId });

    // if (!existingUserCart) {
    //   const addUserCart = await Cart.create(cartData);
    //   return addUserCart;
    // }

    // if (existingUserCart) {
    //   // Checking if the product is exist already in cart items
    //   const existProductInCartItem = existingUserCart.items.find(item => item.productId === productId);

    //   if(!existProductInCartItem) {

    //   }
    // }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const removeItemFromUserCartFromDB = async (
  userId: Types.ObjectId,
  productId: Types.ObjectId
) => {
  try {
    const userCart = await Cart.findOneAndUpdate(
      { _id: userId },
      { $pull: { items: { productId } } },
      { new: true }
    );
    if (!userCart) throw new Error("User cart not found");

    userCart.totalPrice = userCart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    await userCart.save();
    return userCart;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const cartServices = {
  createOrUpdateUserCartIntoDB,
  removeItemFromUserCartFromDB,
};
