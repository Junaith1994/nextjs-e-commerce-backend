import { Schema, model } from "mongoose";
import { TUser } from "./users.interface";

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true },
});

const User = model<TUser>("User", userSchema);

export default User;
