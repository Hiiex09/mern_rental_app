import z from "zod";

export const PropertySchema = z.object({
  name: z.string().min(5).max(50),
  description: z.string().min(10).max(250),
  location: z.string().min(5).max(50),
  tags: z.array(z.string()).optional(),
});
