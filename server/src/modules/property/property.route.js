import express from "express";
import { validate } from "../../middleware/validate.js";
import { create_property, get_all_properties } from "./property.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { authorizedRoles } from "../../middleware/authorizedRoles.middleware.js";
import { PropertySchema } from "./property.validation.js";

const router = express.Router();

router.get(
  "/",
  protectRoute,
  authorizedRoles("OWNER", "ADMIN"),
  get_all_properties,
);
router.post(
  "/create",
  protectRoute,
  authorizedRoles("OWNER"),
  validate(PropertySchema),
  create_property,
);

export default router;
