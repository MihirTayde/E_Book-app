import express from "express";
import createUser from "./userController"; // Import the createUser function

const userRouter = express.Router();

// POST route for user registration
userRouter.post("/register", createUser);

export default userRouter;
