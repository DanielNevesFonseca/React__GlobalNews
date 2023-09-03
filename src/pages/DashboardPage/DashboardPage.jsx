import { NewsList } from "../../components/NewsList/NewsList";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./style.module.scss";
import { CreateNewsModal } from "../../components/forms/CreateNewsModal/createNewsModal";
import { useContext, useState } from "react";
import { DeleteNewsModal } from "../../components/forms/DeleteNewsModal/DeleteNewsModal";
import { NewsContext } from "../../providers/NewsContext";

export const DashboardPage = () => {
  const { removingPost } = useContext(NewsContext);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <TemplatePage>
      <section className={`default-page ${styles.section}`}>
        <div className={`${styles.titleAlign}`}>
          <h2 className="title2">Suas publicações</h2>
          <button
            onClick={() => openModal()}
            className="btn-md"
            title="Adicionar"
            aria-label="add"
          >
            <AiOutlinePlusCircle size={21} /> Novo post
          </button>
        </div>
        <NewsList />
      </section>
      {isCreateModalOpen ? <CreateNewsModal closeModal={closeModal} /> : null}
      {removingPost ? <DeleteNewsModal /> : null}
    </TemplatePage>
  );
};
