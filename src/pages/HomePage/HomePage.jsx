import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { Link } from "react-router-dom";
import banner from "../../assets/images/Banner.svg";
import { NewsContainer } from "../../components/NewsContainer";
import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <TemplatePage>
      <main className="default-page">
        <section className={style.sectionGreeting}>
          <div className={style.box}>
            <h3 className="text-sm">KENZIE FEED</h3>
            <h1 className="title1">Seja muito bem vindo ao KenzieFeed</h1>
            <p className="text">Fique por dentro das últimas notícias</p>
          </div>
          <img alt="banner" src={banner}></img>
        </section>
        <section>
          <div>
            <div className={style.inline}>
              <h2 className="title2">Últimas notícias</h2>
              <Link to="/all-news" className={`btn-sm ${style.link}`}>
                Ver Tudo
              </Link>
            </div>
            <NewsContainer />
          </div>
        </section>
      </main>
    </TemplatePage>
  );
};
