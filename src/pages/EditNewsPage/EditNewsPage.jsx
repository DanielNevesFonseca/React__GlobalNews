import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Input } from "../../components/Form/Input";
import { Textarea } from "../../components/Form/Textarea/Textarea";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { NewsContext } from "../../providers/NewsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditNewsSchema } from "./EditNewsSchema";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import styles from "./style.module.scss";

export const EditNewsPage = () => {
  const { updateNews, editingNews } = useContext(NewsContext);

  const username = localStorage.getItem("@KENZIE-FEED:USERNAME");
  const userId = JSON.parse(localStorage.getItem("@KENZIE-FEED:USERID"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditNewsSchema),
    values: {
      title: editingNews?.title,
      image: editingNews?.image,
      description: editingNews?.description,
    },
  });

  const submit = (formData) => {
    updateNews.mutate({ ...formData, owner: username, userId: userId });
    localStorage.removeItem("@KENZIE-FEED:EDITNEWS");
  };

  const navigate = useNavigate();

  return (
    <TemplatePage>
      <section className={`default-page ${styles.pageBack}`}>
        <div className={styles.alignPage}>
          <div className={styles.titleAlign}>
            <h2 className="title2">Editando:</h2>
            <button
              onClick={() => {
                localStorage.removeItem("@KENZIE-FEED:EDITNEWS");
                navigate("/dashboard");
              }}
              className="btn-outline-md"
            >
              <span>
                <BiArrowBack /> Voltar
              </span>
            </button>
          </div>
          <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <div className={styles.inputs}>
              <label className="label" htmlFor="title">
                Título
              </label>
              <Input id="title" {...register("title")} error={errors.title} />
            </div>
            <div className={styles.inputs}>
              <label className="label" htmlFor="image">
                Imagem em destaque
              </label>
              <Input id="image" {...register("image")} error={errors.image} />
            </div>
            <div className={styles.inputs}>
              <label className="label" htmlFor="description">
                Conteúdo
              </label>
              <Textarea
                id="description"
                {...register("description")}
                error={errors.description}
              ></Textarea>
            </div>
            <button className="btn-md" type="submit">
              Salvar post
            </button>
          </form>
        </div>
      </section>
    </TemplatePage>
  );
};
