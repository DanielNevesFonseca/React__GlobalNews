import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const TemplatePage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
