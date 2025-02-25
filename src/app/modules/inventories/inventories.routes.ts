import express from "express";
import { inventoriesController } from "./inventories.controller";

const router = express.Router();

// Create product route
router.post("/create-product", inventoriesController.createProduct);

// Update product route
router.put("/update-product/:id", inventoriesController.updateProductInfo);

// Retrieve all products
router.get("/all-products", inventoriesController.getAllProducts);

// Retrieve products by category
router.get(
  "/category/:category",
  inventoriesController.getAllProductsByCategory
);

// Search products
router.get("/search", inventoriesController.getSearchedProducts);

// Single product
router.get("/product/:id", inventoriesController.getSingleProduct);

// Delete single product
router.delete("/remove-product/:id", inventoriesController.removeSingleProduct);

const inventoryRoutes = router;

export default inventoryRoutes;
