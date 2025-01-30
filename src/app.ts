import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./app/modules/users/users.routes";

const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("This is e-commerce App Backend");
});

export default app;
