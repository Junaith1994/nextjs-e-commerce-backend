import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  database_uri: process.env.DATABAE_URL,
};
