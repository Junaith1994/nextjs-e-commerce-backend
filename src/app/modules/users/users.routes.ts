import { userController } from "./users.controller";
import express from "express";

const router = express.Router();

// Create user route
router.post("/create-user", userController.createUser);

// Update user route
router.put("/update-user/:id", userController.UpdateUserInfo);

// Ritrieve all users
router.get("/all-users", userController.getAllUsers);

// Single user
router.get("/user/:id", userController.getSingleUser);

// Delete single user
router.delete("/remove-user/:id", userController.removeSingleUser);

const userRoutes = router;

export default userRoutes;
