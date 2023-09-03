import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext";

export const NewsCard = ({ news }) => {
  const { setEditingNews, setEditNewsLocalStorage, setRemovingPost } =
    useContext(NewsContext);
  const navigate = useNavigate();

  return (
    <li className={styles.userPost}>
      <div className={styles.infoBox}>
        <img src={news.image} alt="News' image" />
        <h3 className="title3">{news.title}</h3>
      </div>
      <div className={styles.buttonBox}>
        <button
          title="Editar"
          aria-label="edit"
          onClick={() => {
            setEditingNews(news);
            setEditNewsLocalStorage(news);
            navigate("/edit-news");
          }}
        >
          <MdOutlineModeEditOutline size={21} />
        </button>
        <button
          onClick={() => setRemovingPost(news)}
          title="Remover"
          aria-label="remove"
        >
          <RiDeleteBin6Line size={21} />
        </button>
      </div>
    </li>
  );
};
