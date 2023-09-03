import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes/MainRoutes";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <MainRoutes />
      <ToastContainer theme="light" autoClose={2 * 1000} position="top-right" limit={2} />
    </>
  );
};

export default App;
