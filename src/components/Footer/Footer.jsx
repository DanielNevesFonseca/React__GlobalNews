import styles from "./style.module.scss";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className={styles.footerContainer}>
      <p className="text-sm">
        &copy; Todos os direitos reservados - Kenzie Academy Brasil -{" "}
        {date.getFullYear()}
      </p>
    </footer>
  );
};
