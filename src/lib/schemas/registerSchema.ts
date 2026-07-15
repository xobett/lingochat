import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, {
    error: "Name must be at least 3 characters long!",
  }),
  email: z.email({
    error: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters long!",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
