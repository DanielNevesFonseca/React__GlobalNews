import { createContext } from "react";
import { kenzieFeedApi } from "../services/kenzieFeedApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const endpoint = window.location.pathname;

  const userLogin = async (formData) => {
    try {
      const { data } = await kenzieFeedApi.post("/login", formData);
      localStorage.setItem("@KENZIE-FEED:TOKEN", data.accessToken);
      localStorage.setItem("@KENZIE-FEED:USERID", data.user.id);
      localStorage.setItem("@KENZIE-FEED:USERNAME", data.user.name);

      toast.success(`Seja bem vindo!`);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (error) {
      toast.error("Email ou senha incorretos");
    }
  };

  const registerUser = async (formData) => {
    try {
      await kenzieFeedApi.post("/users", formData);
      toast.success("Cadastro feito com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const logout = () => {
    localStorage.removeItem("@KENZIE-FEED:TOKEN");
    localStorage.removeItem("@KENZIE-FEED:USERID");
    localStorage.removeItem("@KENZIE-FEED:USERNAME");
    localStorage.removeItem("@KENZIE-FEED:EDITNEWS");
    setTimeout(() => {
      navigate("/");
    }, 1000);
    toast.success("Você está sendo deslogado...");
  };

  return (
    <UserContext.Provider value={{ userLogin, registerUser, endpoint, logout }}>
      {children}
    </UserContext.Provider>
  );
};
