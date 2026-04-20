import { z } from "zod";

// Helper to validate dates
const isValidFutureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = new Date(date);
  return checkDate >= today;
};

// Schema for creating a booking
export const createBookingSchema = z
  .object({
    unitId: z
      .string()
      .min(1, "unitId is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid unitId format"),
    propertyId: z
      .string()
      .min(1, "propertyId is required")
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid propertyId format"),
    startDate: z
      .string()
      .or(z.date())
      .refine((date) => isValidFutureDate(date), {
        message: "startDate cannot be in the past",
      }),
    endDate: z
      .string()
      .or(z.date())
      .refine((date) => isValidFutureDate(date), {
        message: "endDate cannot be in the past or today",
      }),
    totalPrice: z
      .number()
      .positive("totalPrice must be a positive number")
      .optional(),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return start < end;
    },
    {
      message: "startDate must be before endDate",
      path: ["startDate"],
    },
  );

// Schema for updating a booking
export const updateBookingSchema = z
  .object({
    startDate: z
      .string()
      .or(z.date())
      .refine((date) => isValidFutureDate(date), {
        message: "startDate cannot be in the past",
      })
      .optional(),
    endDate: z
      .string()
      .or(z.date())
      .refine((date) => isValidFutureDate(date), {
        message: "endDate cannot be in the past or today",
      })
      .optional(),
    status: z
      .enum(["pending", "confirmed", "cancelled", "completed"])
      .optional(),
    cancellationReason: z.string().optional(),
    totalPrice: z
      .number()
      .positive("totalPrice must be a positive number")
      .optional(),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        return start < end;
      }
      return true;
    },
    {
      message: "startDate must be before endDate",
      path: ["startDate"],
    },
  );

// Validation functions with error handling
export const validateCreateBooking = (data) => {
  try {
    const validated = createBookingSchema.parse(data);
    return {
      isValid: true,
      errors: [],
      data: validated,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
        data: null,
      };
    }
    return {
      isValid: false,
      errors: [{ path: "unknown", message: error.message }],
      data: null,
    };
  }
};

export const validateUpdateBooking = (data) => {
  try {
    const validated = updateBookingSchema.parse(data);
    return {
      isValid: true,
      errors: [],
      data: validated,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
        data: null,
      };
    }
    return {
      isValid: false,
      errors: [{ path: "unknown", message: error.message }],
      data: null,
    };
  }
};
