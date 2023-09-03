import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export const NewsCard = ({ news }) => {
  const { setShowNews } = useContext(NewsContext);
  const navigate = useNavigate();

  return (
    <li className={style.card}>
      <div className={style.card__container}>
        <img className={style.img} alt="imagem da notícia" src={news.image} />
        <p className="text-sm">Por: {news.owner}</p>
        <h4 className="title3">{news.title}</h4>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          setShowNews(news);
          navigate("/single-news");
        }}
      >
        Leia mais
      </button>
    </li>
  );
};
