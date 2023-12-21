import z from "zod";

export const logInSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(4, { message: "Username must be at lest of 4 characters" })
    .max(100, { message: "Username must not be more than 100 characters" }),
  password: z
    .string({ required_error: "password is Required" })
    .trim()
    .min(7, { message: "password must be at lest of 7 characters" })
    .max(100, { message: "password must not be more than 100 characters" }),
});

export const signUpSchema = logInSchema.extend({
  username: z
    .string({ required_error: "Username is Required" })
    .trim()
    .min(4, { message: "Username must be at lest of 4 characters" })
    .max(100, { message: "Username must not be more than 100 characters" }),

  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: "Phone must be at lest of 10 characters" })
    .max(20, { message: "Phone must not be more than 10 characters" }),
});
