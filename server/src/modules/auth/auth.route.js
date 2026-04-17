import express from "express";
import { checkAuth, login, logout, signup } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { loginSchema, signUpSchema } from "./auth.validate.js";
import { protectRoute } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", validate(signUpSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.get("/check-auth", protectRoute, checkAuth);
export default router;
