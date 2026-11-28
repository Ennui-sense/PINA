import z from "zod";
import { isValidDate } from "~/lib/validateDate";

export const requestSchema = z.object({
  name: z
    .string()
    .trim()
    .refine(value => value, "Поле обязательно для заполнения")
    .min(2, "Слишком короткое имя"),

  contact: z
    .string()
    .refine(value => value, "Поле обязательно для заполнения")
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите номер полностью"),

  date: z
    .string()
    .refine((value) => !value || isValidDate(value), "Укажите корректную дату"),

  guests: z
    .string()
    .refine(
      (value) =>
        !value.trim() ||
        (/^\d+$/.test(value) && Number(value) >= 1 && Number(value) <= 999),
      "Введите количество гостей от 1 до 999",
    ),

  eventFormat: z.string().trim().max(100, "Максимум 100 символов"),
  comment: z.string().trim().max(800, "Максимум 800 символов"),
});

export type RequestFormValues = z.infer<typeof requestSchema>;

export const validateRequest = (values: unknown) => {
  const result = requestSchema.safeParse(values);
  return result.success
    ? { success: true as const, data: result.data }
    : { success: false as const, errors: z.flattenError(result.error).fieldErrors };
};
