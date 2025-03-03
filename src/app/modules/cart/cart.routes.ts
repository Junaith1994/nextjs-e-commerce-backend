import express from "express";
import { cartControllers } from "./cart.controllers";

const router = express.Router();

// Create or update user cart
router.post("/create-cart", cartControllers.createOrUpdateUserCart);

const cartRoutes = router;

export default cartRoutes;
