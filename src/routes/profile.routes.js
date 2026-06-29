import express from "express";

import {
    completeWorkerProfile, completeBusinessProfile, getMyProfile, updateProfile, checkProfileCompletion,
} from "../controllers/profile.controller.js";

import { auth } from "../middleware/auth.middleware.js";

const router = express.Router();

// Complete Worker Profile
router.post("/complete-worker", auth, completeWorkerProfile);

// Complete Business Profile
router.post("/complete-business", auth, completeBusinessProfile);

// Get Logged In User Profile
router.get("/me", auth, getMyProfile);

// Update Profile
router.put("/update", auth, updateProfile);

// Check Profile Completion
router.get("/check-completion", auth, checkProfileCompletion);

export default router;