import { z } from "zod";
import { contactFormSchema } from "./schema";

export type contactSchemaType = z.infer<typeof contactFormSchema>;
