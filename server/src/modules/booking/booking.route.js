import express from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "./booking.controller.js";
import { protectRoute } from "../../middleware/auth.middleware.js";
import { authorizedRoles } from "../../middleware/authorizedRoles.middleware.js";

const router = express.Router();

// POST /bookings - Create a new booking
// Access: TENANT, ADMIN
router.post(
  "/",
  protectRoute,
  authorizedRoles("TENANT", "ADMIN"),
  createBooking,
);

// GET /bookings - Get all bookings (filtered by role)
// Access: TENANT (own bookings), OWNER (their property bookings), ADMIN (all)
router.get(
  "/",
  protectRoute,
  authorizedRoles("TENANT", "OWNER", "ADMIN"),
  getBookings,
);

// GET /bookings/:id - Get specific booking
// Access: ADMIN, booking creator (TENANT), property owner
router.get(
  "/:id",
  protectRoute,
  authorizedRoles("TENANT", "OWNER", "ADMIN"),
  getBookingById,
);

// PATCH /bookings/:id - Update booking
// Access: ADMIN (full control), TENANT (cancel only if pending), OWNER (approve/reject)
router.patch(
  "/:id",
  protectRoute,
  authorizedRoles("TENANT", "OWNER", "ADMIN"),
  updateBooking,
);

// DELETE /bookings/:id - Delete booking
// Access: ADMIN (unrestricted), TENANT (own bookings if pending), OWNER (their bookings if pending)
router.delete(
  "/:id",
  protectRoute,
  authorizedRoles("TENANT", "OWNER", "ADMIN"),
  deleteBooking,
);

export default router;
