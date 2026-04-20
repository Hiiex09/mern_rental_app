import Booking from "./booking.model.js";
import Units from "../units/units.model.js";
import Property from "../property/property.model.js";
import {
  validateCreateBooking,
  validateUpdateBooking,
} from "./booking.validation.js";

export const createBookingService = async (bookingData) => {
  try {
    // Validate input with Zod
    const validation = validateCreateBooking(bookingData);
    if (!validation.isValid) {
      const errorMessages = validation.errors
        .map((err) => err.message)
        .join(", ");
      throw new Error(errorMessages);
    }

    const { unitId, propertyId, startDate, endDate, totalPrice } =
      validation.data;
    const { userId } = bookingData;

    // Check if unit exists
    const unit = await Units.findById(unitId);
    if (!unit) {
      throw new Error("Unit not found");
    }

    // Check if property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      throw new Error("Property not found");
    }

    // Verify unit belongs to property
    if (unit.propertyId.toString() !== propertyId) {
      throw new Error("Unit does not belong to this property");
    }

    // Check unit availability
    if (unit.status !== "available") {
      throw new Error(`Unit is currently ${unit.status}`);
    }

    // CRITICAL: Prevent double booking
    const existingBooking = await Booking.findOne({
      unitId,
      status: { $in: ["pending", "confirmed"] },
      $or: [
        {
          startDate: { $lt: new Date(endDate) },
          endDate: { $gt: new Date(startDate) },
        },
      ],
    });

    if (existingBooking) {
      throw new Error("Unit is already booked for the selected dates");
    }

    // Calculate total price if not provided
    let finalPrice = totalPrice;
    if (!finalPrice) {
      const days = Math.ceil(
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24),
      );
      finalPrice = days * unit.price;
    }

    // Create booking
    const newBooking = new Booking({
      userId,
      unitId,
      propertyId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPrice: finalPrice,
      status: "pending",
    });

    await newBooking.save();
    return newBooking;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
};

export const getBookingsService = async (filters = {}) => {
  try {
    const bookings = await Booking.find(filters)
      .populate("userId", "firstName lastName email mobile")
      .populate("unitId", "unitName price capacity features")
      .populate("propertyId", "name location");
    return bookings;
  } catch (error) {
    throw new Error("Error fetching bookings: " + error.message);
  }
};

export const getBookingByIdService = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId)
      .populate("userId", "firstName lastName email mobile")
      .populate("unitId", "unitName price capacity features")
      .populate("propertyId", "name location");

    if (!booking) {
      throw new Error("Booking not found");
    }

    return booking;
  } catch (error) {
    throw new Error("Error fetching booking: " + error.message);
  }
};

export const updateBookingService = async (
  bookingId,
  updateData,
  userRole,
  userId,
) => {
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    // Validate update data with Zod
    const validation = validateUpdateBooking(updateData);
    if (!validation.isValid) {
      const errorMessages = validation.errors
        .map((err) => err.message)
        .join(", ");
      throw new Error(errorMessages);
    }

    const validatedData = validation.data;

    // Role-based update restrictions
    if (userRole === "TENANT") {
      // Tenants can only cancel if booking is pending
      if (validatedData.status && validatedData.status === "cancelled") {
        if (booking.status !== "pending") {
          throw new Error("Can only cancel pending bookings");
        }
        booking.status = "cancelled";
        booking.cancellationReason =
          validatedData.cancellationReason || "Cancelled by tenant";
      } else {
        throw new Error("Tenants can only cancel bookings");
      }
    } else if (userRole === "OWNER") {
      // Owners can approve (confirm) or reject (cancel) bookings
      if (validatedData.status) {
        if (
          validatedData.status === "confirmed" &&
          booking.status === "pending"
        ) {
          booking.status = "confirmed";
        } else if (
          validatedData.status === "cancelled" &&
          booking.status === "pending"
        ) {
          booking.status = "cancelled";
          booking.cancellationReason =
            validatedData.cancellationReason || "Rejected by owner";
        } else {
          throw new Error("Owner can only confirm or reject pending bookings");
        }
      }
    } else if (userRole === "ADMIN") {
      // Admins can update most fields
      if (validatedData.status) booking.status = validatedData.status;
      if (validatedData.cancellationReason)
        booking.cancellationReason = validatedData.cancellationReason;
      if (validatedData.totalPrice)
        booking.totalPrice = validatedData.totalPrice;
    }

    await booking.save();
    return booking;
  } catch (error) {
    throw new Error("Error updating booking: " + error.message);
  }
};

export const deleteBookingService = async (bookingId, userRole) => {
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    // Only allow deletion if booking is pending or cancelled
    if (!["pending", "cancelled"].includes(booking.status)) {
      throw new Error("Can only delete pending or cancelled bookings");
    }

    await Booking.findByIdAndDelete(bookingId);
    return booking;
  } catch (error) {
    throw new Error("Error deleting booking: " + error.message);
  }
};
