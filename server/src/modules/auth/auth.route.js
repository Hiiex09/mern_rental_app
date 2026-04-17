import express from "express";
import { signup } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { signUpSchema } from "./auth.validate.js";

const router = express.Router();

router.post("/signup", validate(signUpSchema), signup);
export default router;
