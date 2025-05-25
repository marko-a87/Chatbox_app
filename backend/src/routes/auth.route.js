import express from "express";
import { checkAuth, signupController, loginController, logoutController } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { updateProfile } from "../controllers/auth.controller.js";
//Creates an express instance of a router
const router = express.Router();

router.post('/signup', signupController);

router.post('/login', loginController);

router.post('/logout',logoutController);

router.put("/update-profile",protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

export default router;