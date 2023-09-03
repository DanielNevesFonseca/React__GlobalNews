import { NewsContainer } from "../../components/NewsContainer";
import { TemplatePage } from "../../components/TemplatePage/TemplatePage";
import style from "./style.module.scss";

export const AllNewsPage = () => {
  return (
    <TemplatePage>
      <main className="default-page">
        <h1 className={`title2 ${style.title}`}>Todas as notícias</h1>
        <NewsContainer />
      </main>
    </TemplatePage>
  );
};
