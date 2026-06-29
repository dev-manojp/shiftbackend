import express from "express";

import { signup, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginUser);

export default router;