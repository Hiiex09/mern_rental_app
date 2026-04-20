import express from "express";
import {
  generate_unit,
  getAllUnits,
  getUnitsByProperty,
  updateUnit,
  deleteUnit,
} from "./units.controller.js";
import { uploadPropertyImages } from "../../middleware/upload.middleware.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { authorizedRoles } from "../../middleware/authorizedRoles.middleware.js";

const router = express.Router();

// POST /units - Create a new unit
router.post(
  "/",
  protectRoute,
  authorizedRoles("ADMIN", "OWNER"),
  uploadPropertyImages.array("unitImages", 10),
  generate_unit,
);

// GET /units - Get all units
router.get("/", protectRoute, authorizedRoles("ADMIN", "OWNER"), getAllUnits);

// GET /units/property/:propertyId - Get units by property ID
router.get(
  "/property/:propertyId",
  protectRoute,
  authorizedRoles("ADMIN", "OWNER"),
  getUnitsByProperty,
);

// PATCH /units/:id - Update a unit
router.patch(
  "/:id",
  protectRoute,
  authorizedRoles("ADMIN", "OWNER"),
  uploadPropertyImages.array("unitImages", 10),
  updateUnit,
);

// DELETE /units/:id - Delete a unit
router.delete(
  "/:id",
  protectRoute,
  authorizedRoles("ADMIN", "OWNER"),
  deleteUnit,
);

export default router;
