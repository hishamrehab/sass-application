import { z } from 'zod';


export const signUpSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(30, "Name must be at most 30 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters").max(30, "Password must be at most 30 characters"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
