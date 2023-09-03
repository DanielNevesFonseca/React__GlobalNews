import { z } from "zod";

export const EditNewsSchema = z.object({
  title: z.string().nonempty("Esse campo não pode ficar vazio"),
  image: z.string().nonempty("Esse campo não pode ficar vazio"),
  description: z.string().nonempty("Esse campo não pode ficar vazio"),
});
