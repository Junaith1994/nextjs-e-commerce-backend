export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin"; // Default role type as 'user'
};

export type TUserDocDB = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  v: number;
};
