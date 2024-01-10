import { useForm } from "react-hook-form";
import { Input } from "../../Form/Input";
import { Textarea } from "../../Form/Textarea/Textarea";
import styles from "./style.module.scss";
import { GrFormClose } from "react-icons/gr";
import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext";
import { toast } from "react-toastify";

export const CreateNewsModal = ({ closeModal }) => {
    const { createNews } = useContext(NewsContext);

    const username = localStorage.getItem("@KENZIE-FEED:USERNAME");
    const userId = localStorage.getItem("@KENZIE-FEED:USERID");

    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        createNews.mutate({ ...formData, owner: username, userId: userId });
        closeModal();
        toast.success("Post criado com sucesso!");
    };

    return (
        <div className={styles.overlayBox}>
            <div className={styles.modalController} role="dialogue">
                <button onClick={() => closeModal()}>
                    <GrFormClose size={21} />
                </button>
                <h2 className="title2">Novo post</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        required
                        placeholder="Título"
                        label="título"
                        {...register("title")}
                        autocomplete="off"
                    />
                    <Input
                        required
                        placeholder="Imagem destaque"
                        label="imagem"
                        {...register("image")}
                        autocomplete="off"
                    />
                    <Textarea
                        required
                        placeholder="Conteúdo do post"
                        {...register("description")}
                        autocomplete="off"
                    />
                    <button type="submit" className="btn-md">
                        Criar post
                    </button>
                </form>
            </div>
        </div>
    );
};
