import express from "express";
import { inventoriesController } from "./inventories.controller";

const router = express.Router();

// Create product route
router.post("/create-product", inventoriesController.createProduct);

// Update product route
router.post("/update-product", inventoriesController.updateProductInfo);

// Ritrieve all products
router.get("/all-products", inventoriesController.getAllProducts);

// Single product
router.get("/product/:id", inventoriesController.getSingleProduct);

// Delete single product
router.delete("/remove-product/:id", inventoriesController.removeSingleProduct);

const inventoryRoutes = router;

export default inventoryRoutes;
