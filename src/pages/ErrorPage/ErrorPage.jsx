import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../../assets/gifs/loading.gif";

export const ErrorPage = () => {
  const [countDown, setCountDown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [countDown]);

  return (
    <section className={styles.error__container}>
      <div className={`container ${styles.error__box}`}>
        <h2 className="title2">Error 404:</h2>
        <h3 className="text">Página não encontrada!</h3>
      </div>
      <div className={`container ${styles.error__redirection}`}>
        <h3 className="title3">Você será redirecionado em: {countDown}s</h3>
        <img src={loading} alt="Carregando..." />
      </div>
    </section>
  );
};
