import { Router } from "express";
import userController from "./../Controller/userController"
import { protect } from "../Auth/Authenticate";

const UserRouter = Router();

UserRouter.post("/signUp", userController.signUpUser)
UserRouter.post("/signIn", userController.signInUser)
UserRouter.get("/", protect, userController.sendhello)

export default UserRouter