import express , { Router } from "express";
import UserController from "../controllers/UserController";

const router : Router = express.Router()


router.route("/register").post(UserController.registerUser)
router.route("/login").post(UserController.login)








export default router