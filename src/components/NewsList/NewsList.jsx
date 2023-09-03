import { useContext } from "react";
import { NewsContext } from "../../providers/NewsContext";
import { NewsCard } from "./NewsCard/NewsCard";
import styles from "./styles.module.scss";
import { FaRegFaceSadTear } from "react-icons/fa6";

export const NewsList = () => {
  const { userNewsList } = useContext(NewsContext);

  return (
    <>
      {userNewsList === undefined || userNewsList.length === 0 ? (
        <div className={styles.messageBox}>
          <p className="text">
            Você ainda não possui nenhum post cadastrado...
          </p>
          <FaRegFaceSadTear size={21} />
        </div>
      ) : (
        <ul className={styles.userPostList}>
          {userNewsList?.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </ul>
      )}
    </>
  );
};
