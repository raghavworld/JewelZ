import express from "express";
import { userRegister } from "../controller/userCtrl.js";
const userRouter = express.Router();

userRouter.get("/register", userRegister);

export default userRouter;
