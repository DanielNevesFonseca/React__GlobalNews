import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { RxExit } from "react-icons/rx";

export const Header = () => {
  const { endpoint, logout } = useContext(UserContext);
  const username = localStorage.getItem("@KENZIE-FEED:USERNAME");

  return (
    <>
      {endpoint === "/dashboard" || endpoint === "/edit-news" ? (
        <header className={`container ${styles.header}`}>
          <img className={styles.logo} src={Logo} alt="Kenzie Feed Logo" />
          <div className={styles.privateElementsBox}>
            <div className={styles.userFirstLetterBox}>
              <p title={username} className="text">
                {username ? username[0] : null}
              </p>
            </div>

            <Link
              className="btn-outline-md"
              to={endpoint === "/dashboard" ? "/" : "/dashboard"}
            >
              {endpoint === "/dashboard" ? "Home" : "Dashboard"}
            </Link>
            <button
              title="Sair"
              aria-label="Sair"
              onClick={() => {
                logout();
              }}
            >
              <RxExit size={21} />
            </button>
          </div>
        </header>
      ) : (
        <header className={`container ${styles.header}`}>
          <img className={styles.logo} src={Logo} alt="Kenzie Feed Logo" />
          <Link
            className="btn-md"
            to={
              username ? "/dashboard" : endpoint === "/login" ? "/" : "/login"
            }
          >
            {username
              ? "Dashboard"
              : endpoint === "/login"
              ? "Home"
              : "Acessar"}
          </Link>
        </header>
      )}
    </>
  );
};
