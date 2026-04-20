import express from "express";
import { validate } from "../../middleware/validate.js";
import {
  create_property,
  get_all_properties,
  get_properties_by_id,
  update_property,
  delete_property,
  browseAvailableProperties,
} from "./property.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { authorizedRoles } from "../../middleware/authorizedRoles.middleware.js";
import { PropertySchema } from "./property.validation.js";
import { uploadPropertyImages } from "../../middleware/upload.middleware.js";

const router = express.Router();

// PUBLIC: Browse all available properties (no auth required)
router.get("/browse/available", browseAvailableProperties);

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
  uploadPropertyImages.array("images", 5), // max 5 images
  validate(PropertySchema),
  create_property,
);

router.patch(
  "/update/:id",
  protectRoute,
  authorizedRoles("OWNER", "ADMIN"),
  uploadPropertyImages.array("images"),
  update_property,
);

router.delete(
  "/delete/:id",
  protectRoute,
  authorizedRoles("OWNER", "ADMIN"),
  delete_property,
);

export default router;
