import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const token = localStorage.getItem("@KENZIE-FEED:TOKEN");

  return <>{!token ? <Outlet /> : <Navigate to={"/dashboard"} />};</>;
};
