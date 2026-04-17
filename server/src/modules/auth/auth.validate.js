import z from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  address: z.string().min(1),
  email: z.string().email(),
  mobile: z.string().max(11),
  password: z.string().min(8),
  profile: z.string().optional(),
  role: z.enum(["TENANT", "OWNER", "ADMIN"]).optional().default("TENANT"),
});
