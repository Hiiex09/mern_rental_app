import Booking from "./booking.model.js";
import Property from "../property/property.model.js";
import {
  createBookingService,
  getBookingsService,
  getBookingByIdService,
  updateBookingService,
  deleteBookingService,
} from "./booking.service.js";

export const createBooking = async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      userId: req.user._id, // Tenant creating the booking
    };

    const booking = await createBookingService(bookingData);
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const userRole = req.user.role;
    const userId = req.user._id;
    let filters = {};

    if (userRole === "ADMIN") {
      // Admins see all bookings
      filters = {};
    } else if (userRole === "OWNER") {
      // Owners see bookings for their properties only
      const ownerProperties = await Property.find({ postedBy: userId });
      const propertyIds = ownerProperties.map((p) => p._id);
      filters = { propertyId: { $in: propertyIds } };
    } else if (userRole === "TENANT") {
      // Tenants see only their bookings
      filters = { userId };
    }

    const bookings = await getBookingsService(filters);
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await getBookingByIdService(id);

    // Check access permissions
    const userRole = req.user.role;
    const userId = req.user._id;

    // Admins have full access
    if (userRole === "ADMIN") {
      return res.status(200).json({ booking });
    }

    // Booking creator (tenant) can view
    if (booking.userId.toString() === userId.toString()) {
      return res.status(200).json({ booking });
    }

    // Property owner can view
    const property = await Property.findById(booking.propertyId);
    if (property.postedBy.toString() === userId.toString()) {
      return res.status(200).json({ booking });
    }

    // No access
    res.status(403).json({ message: "Access denied" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const userRole = req.user.role;
    const userId = req.user._id;

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check permissions based on role
    if (userRole === "TENANT") {
      // Tenants can only update their own bookings
      if (booking.userId.toString() !== userId.toString()) {
        return res
          .status(403)
          .json({ message: "Can only update your own bookings" });
      }
    } else if (userRole === "OWNER") {
      // Owners can only update bookings for their properties
      const property = await Property.findById(booking.propertyId);
      if (property.postedBy.toString() !== userId.toString()) {
        return res
          .status(403)
          .json({ message: "Can only update bookings for your properties" });
      }
    }
    // Admins have full access (no checks needed)

    const updatedBooking = await updateBookingService(
      id,
      req.body,
      userRole,
      userId,
    );
    res
      .status(200)
      .json({
        message: "Booking updated successfully",
        booking: updatedBooking,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const userRole = req.user.role;
    const userId = req.user._id;

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check permissions
    if (userRole === "TENANT") {
      // Tenants can only delete their own bookings
      if (booking.userId.toString() !== userId.toString()) {
        return res
          .status(403)
          .json({ message: "Can only delete your own bookings" });
      }
    } else if (userRole === "OWNER") {
      // Owners can only delete bookings for their properties
      const property = await Property.findById(booking.propertyId);
      if (property.postedBy.toString() !== userId.toString()) {
        return res
          .status(403)
          .json({ message: "Can only delete bookings for your properties" });
      }
    }
    // Admins have full access

    const deletedBooking = await deleteBookingService(id, userRole);
    res
      .status(200)
      .json({
        message: "Booking deleted successfully",
        booking: deletedBooking,
      });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
