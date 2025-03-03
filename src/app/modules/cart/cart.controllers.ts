import { Request, Response } from "express";
import { cartServices } from "./cart.services";

const createOrUpdateUserCart = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userId, productId, quantity } = req.body.data;
    const result = await cartServices.createOrUpdateUserCartIntoDB(
      userId,
      productId,
      quantity
    );
    return res.status(201).json({
      message: result && "User cart created or updated successfully",
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

export const cartControllers = {
  createOrUpdateUserCart,
};
