import z from "zod";

export const createUnitSchema = z.object({
  unitName: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be a positive number"),
  status: z.enum(
    ["available", "occupied", "maintenance", "reserved"],
    "Status must be either 'available' or 'occupied'",
  ),
  capacity: z.number().positive("Capacity must be a positive number"),
  features: z.array(z.string()).optional(),
  unitImages: z.array(z.string()).optional(),
});
