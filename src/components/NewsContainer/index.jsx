import { useContext } from "react";
import { NewsContext } from "../../providers/NewsContext";
import { NewsCard } from "./NewsCard";
import style from "./style.module.scss";

export const NewsContainer = () => {
  const { newsList } = useContext(NewsContext);
  return (
    <ul className={style.box}>
      {newsList == [] ? (
        <p>Não há nenhuma noticia</p>
      ) : (
        newsList?.map((news) => <NewsCard news={news} key={news.id} />)
      )}
    </ul>
  );
};
