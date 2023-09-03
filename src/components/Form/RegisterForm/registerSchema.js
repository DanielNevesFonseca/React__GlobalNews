import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("Insira um nome de usuário!"),
    email: z
      .string()
      .nonempty("Insira um email!")
      .email("Insira um email válido!"),
    password: z
      .string()
      .nonempty("Insira um senha!")
      .min(8, "É necessário que a senha contenha pelo menos oito caracteres!")
      .regex(
        /(?=.*?[A-Z])/,
        "É necessário que a senha contenha pelo menos uma letra maiúscula!"
      )
      .regex(
        /(?=.*?[a-z])/,
        "É necessário que a senha contenha pelo menos uma letra minúscula!"
      )
      .regex(
        /(?=.*?[0-9])/,
        "É necessário que a senha contenha pelo menos um número!"
      )
      .regex(
        /(?=.*?[\W])/,
        "É necessário que a senha contenha pelo menos um símbolo especial!"
      ),
    confirmPassword: z.string().nonempty("Confirme a sua senha!"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem!",
    path: ["confirmPassword"],
  });
