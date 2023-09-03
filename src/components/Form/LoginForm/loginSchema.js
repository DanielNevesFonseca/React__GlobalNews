import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Insira um e-mail!")
    .email("Insira um e-mail válido!"),
  password: z.string().nonempty("Insira uma senha!"),
});
