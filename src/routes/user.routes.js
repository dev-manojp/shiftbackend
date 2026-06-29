import express from "express";

import { getAllUsers, getSingleUser, deleteUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/auth.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();


// Login/Register
router.post("/login", loginUser);

// Get All Users
router.get("/", auth, getAllUsers);

// Get Single User
router.get("/:id", auth, getSingleUser);

// Delete User
router.delete("/:id", auth, deleteUser);

export default router;