import { z } from "zod";

const envSchema = z.object({
  GITHUB_TOKEN: z.string().min(1),

  EMAIL: z.string().min(1),
  PASSWORD: z.string().min(1),
  SERVICE_ID: z.string().min(1),
  EMAIL_TEMPLATE: z.string().min(1),
  EMAIL_PUBLIC_KEY: z.string().min(1),

  NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string().min(1),
});

export const parsedEnv = envSchema.parse(process.env);
