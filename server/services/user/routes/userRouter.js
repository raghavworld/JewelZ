import express from "express";
import {
  userLogin,
  userProfile,
  userRegister,
} from "../controller/userCtrl.js";
import { authMid } from "../../../packages/shared/auth.js";
import dotenv from "dotenv";
dotenv.config();
const userRouter = express.Router();

userRouter.post("/register", userRegister); //add validator and authMiddleware
userRouter.post("/login", userLogin);
userRouter.get("/profile", authMid(process.env.ACCESS_SECRET), userProfile);
export default userRouter;
