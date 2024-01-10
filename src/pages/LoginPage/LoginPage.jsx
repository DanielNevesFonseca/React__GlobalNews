import { LoginForm } from "../../components/Form/LoginForm";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { Link } from "react-router-dom";
import style from "./Login.module.scss";
import logo from "../../assets/images/login_image.png";

export const LoginPage = () => {
  return (
    <TemplatePage>
      <main className={`default-page ${style.container}`}>
        <section className={style.logoContainer}>
          <figure>
            <img className={style.logo} src={logo} alt="loginImage" />
          </figure>
        </section>
        <section className={style.formContainer}>
          <h1 className="title2">Acesse o Global News</h1>
          <p className="text">
            Preencha os campos corretamente para fazer login
          </p>
          <LoginForm />
          <p className="text">Não é cadastrado?</p>
          <Link className="link" to="/register">
            Cadastre-se
          </Link>
        </section>
      </main>
    </TemplatePage>
  );
};
