import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/users/users.routes";
import inventoryRoutes from "./app/modules/inventories/inventories.routes";
import categoryRoutes from "./app/modules/categories/categories.routes";
import cartRoutes from "./app/modules/cart/cart.routes";

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cors());

// User Routes
app.use("/api/users", userRoutes);

// Inventory Routes
app.use("/api/inventories", inventoryRoutes);

// Categories Routes
app.use("/api/categories", categoryRoutes);

// Cart Routes
app.use("/api/carts", cartRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To the e-commerce App Backend API");
});

export default app;
