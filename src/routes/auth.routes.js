import express from "express";

import { firebaseLogin } from "../controllers/auth.controller.js";
import { testLogin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/firebase-login", firebaseLogin);
router.post("/test-login", testLogin);

export default router;