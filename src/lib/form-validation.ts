import { z } from "zod";

export const clientFormSchema = (t: (key: string, data?: any) => string) => {
  return z.object({
    email: z
      .string()
      .trim()
      .min(1, { message: t("required") })
      .email({ message: t("email") }),
    userName: z
      .string()
      .trim()
      .min(1, { message: t("required") })
      .transform((value) => value.replace(/\s+/g, " ")),
    age: z
      .string()
      .trim()
      .min(1, { message: t("required") }),

    date: z.date({ message: t("required") }),

    question: z.string().trim().optional(),
    address: z
      .string()
      .trim()
      .min(1, { message: t("required") }),
    phoneNumber: z
      .string()
      .trim()
      .min(1, { message: t("required") })
      .regex(/^\+?[\d\s\-\.()]{7,}$/, { message: t("number") }),
  });
};

export const serverFormSchema = z.object({
  email: z.string().trim().min(1, { message: "Required" }).email(),
  userName: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .transform((value) => value.replace(/\s+/g, " ")),
  age: z.string().trim().min(1, { message: "Required" }),
  address: z.string().trim().min(1, { message: "Required" }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .regex(/^\+?[\d\s\-\.()]{7,}$/, { message: "Invalid phone number" }),
  date: z.string().trim().min(1, { message: "Required" }),
  question: z.string().trim().optional(),
});
