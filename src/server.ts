import mongoose from "mongoose";
import app from "./app";
import config from "./config";

mongoose
  .connect(config.database_uri as string)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`E-commerce app is listening on port ${config.port}`);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
