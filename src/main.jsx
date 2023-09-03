import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { NewsProvider } from "./providers/NewsContext.jsx";
import { UserProvider } from "./providers/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <NewsProvider>
            <App />
          </NewsProvider>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
