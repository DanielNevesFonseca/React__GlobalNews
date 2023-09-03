import { Link } from "react-router-dom";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import style from "./register.module.scss";

export const RegisterPage = () => {
  return (
    <TemplatePage>
      <main className={`default-page ${style.registerContainer}`}>
        <button className="btn-outline">
          <AiOutlineArrowLeft size={16} />
          <Link  to={"/login"}>
            Voltar
          </Link>
        </button>
        <section>
          <h1 className="title2">Cadastre um usuário</h1>
          <p className="text">
            Preencha os campos corretamente para fazer login
          </p>
          <RegisterForm />
        </section>
      </main>
    </TemplatePage>
  );
};
