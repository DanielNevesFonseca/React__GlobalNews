import { GrFormClose } from "react-icons/gr";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext";

export const DeleteNewsModal = () => {
  const { removeNews, setRemovingPost, removingPost } = useContext(NewsContext);

  return (
    <div className={styles.modalController} role="dialog">
      <div className={styles.modalContainer}>
        <button
          onClick={() => setRemovingPost(null)}
          className={styles.closeButton}
        >
          <GrFormClose size={21} />
        </button>
        <h3 className="title3">Tem certeza que deseja apagar o Post? ⬇️</h3>
        <p className="text-sm">"{removingPost.title.slice(0, 40)}..."</p>
        <div>
          <button
            onClick={() => {
              removeNews.mutate(removingPost.id);
              setRemovingPost(null);
            }}
            className="btn-delete"
          >
            Apagar
          </button>
          <button onClick={() => setRemovingPost(null)} className="btn-outline">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

