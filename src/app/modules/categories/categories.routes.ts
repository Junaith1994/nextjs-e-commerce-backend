import express from "express";
import { categoriesControllers } from "./categories.controllers";

const router = express.Router();

// Create categories
router.post("/create-category", categoriesControllers.createCategories);

// Retrieve all categories
router.get("/all-categories", categoriesControllers.retrieveAllCategories);

// Update category
router.put("/category-update/:id", categoriesControllers.updateCategory);

// Delete category
router.delete("/category-delete/:id", categoriesControllers.deleteCategory);

const categoryRoutes = router;

export default categoryRoutes;
