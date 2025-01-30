import { userController } from "./users.controller";
import express from "express";

const router = express.Router();

// Create user route
router.post("/create-user", userController.createUser);

// Update user route
router.post("/update-user", userController.UpdateUserInfo);

// Ritrieve all users
router.get("/all-users", userController.getAllUsers);

// Single user
router.get("/user/:id", userController.getSingleUser);

const userRoutes = router;

export default userRoutes;
