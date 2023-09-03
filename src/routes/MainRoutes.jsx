import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";
import { HomePage } from "../pages/HomePage/HomePage";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { AllNewsPage } from "../pages/AllNewsPage/AllNewsPage";
import { SingleNewsPage } from "../pages/SingleNewsPage/SingleNewsPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { EditNewsPage } from "../pages/EditNewsPage/EditNewsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route index path="/dashboard" element={<DashboardPage />} />
          <Route path="/edit-news" element={<EditNewsPage />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-news" element={<AllNewsPage />} />
        <Route path="/single-news" element={<SingleNewsPage />} />
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
    </>
  );
};
