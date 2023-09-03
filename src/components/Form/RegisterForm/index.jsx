import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { InputPassword } from "../PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import style from "./registerForm.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const { registerUser } = useContext(UserContext);

  const submit = (formData) => {
    registerUser(formData);
  };

  return (
    <form className={style.registerForm} onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          type="Name"
          id="Name"
          placeholder="Nome"
          autoComplete="off"
          {...register("name")}
          error={errors.name}
        />
      </div>
      <div>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          autoComplete="off"
          {...register("email")}
          error={errors.email}
        />
      </div>
      <InputPassword
        id="password"
        placeholder="Senha"
        autoComplete="off"
        {...register("password")}
        error={errors.password}
      />
      <InputPassword
        id="passwordConfirm"
        placeholder="Confirmar senha"
        autoComplete="off"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <button className="btn-md">Cadastrar-se</button>
    </form>
  );
};
