import { z } from "zod";

export const contactFormSchema = z.object({
  user_name: z.string(),
  user_email: z.string(),
  message: z.string(),
});

export const parsedContactSchema = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};
