import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { InputPassword } from "../PasswordInput";
import style from "./loginForm.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <form className={style.containerForm} onSubmit={handleSubmit(submit)}>
        <div>
          <Input
            type="text"
            id="Email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email}
            autocomplete="off"
          />
        </div>
        <InputPassword
          id="Password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password}
          autocomplete="off"
        />
        <button className="btn-lg" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
};
