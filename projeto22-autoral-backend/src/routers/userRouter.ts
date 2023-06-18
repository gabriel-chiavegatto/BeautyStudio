import { Router } from "express";
import { createUser, login } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/register", createUser)
userRouter.post("/login", login);


export { userRouter}