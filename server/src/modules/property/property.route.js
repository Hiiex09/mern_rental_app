import express from "express";
import { validate } from "../../middleware/validate.js";
import {
  create_property,
  get_all_properties,
  get_properties_by_id,
  update_property,
  delete_property,
} from "./property.controller.js";
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

router.get(
  "/:id",
  protectRoute,
  authorizedRoles("TENANT", "OWNER", "ADMIN"),
  get_properties_by_id,
);

router.post(
  "/create",
  protectRoute,
  authorizedRoles("OWNER"),
  validate(PropertySchema),
  create_property,
);

router.put(
  "/update/:id",
  protectRoute,
  authorizedRoles("OWNER", "ADMIN"),
  update_property,
);

router.delete(
  "/delete/:id",
  protectRoute,
  authorizedRoles("OWNER", "ADMIN"),
  delete_property,
);

export default router;
