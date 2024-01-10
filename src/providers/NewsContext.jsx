import { createContext, useState } from "react";
import { globalNewsApi } from "../services/globalNewsApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const NewsContext = createContext({});

export const NewsProvider = ({ children }) => {
  const token = localStorage.getItem("@KENZIE-FEED:TOKEN");
  const userId = localStorage.getItem("@KENZIE-FEED:USERID");
  const editNews = JSON.parse(localStorage.getItem("@KENZIE-FEED:EDITNEWS"));

  const [showNews, setShowNews] = useState(null);
  const [editingNews, setEditingNews] = useState(editNews ? editNews : null);
  const [removingPost, setRemovingPost] = useState(null);

  const navigate = useNavigate();

  const client = useQueryClient();

  const { data: newsList } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data } = await globalNewsApi.get("/posts?_embed=likes");
      return data;
    },
  });

  const userNewsList = newsList?.filter((news) => {
    if (news.userId == userId) {
      return news;
    }
  });

  const getPost = async (postId) => {
    try {
      const { data } = await globalNewsApi.get(`/posts/${postId}?_embed=likes`);
      setShowNews(data);
      const responsePost = await data;
      return responsePost;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const revalidate = () => {
    client.invalidateQueries({ queryKey: "news" });
  };

  const createNews = useMutation({
    mutationFn: async (formData) => {
      return await globalNewsApi.post("/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
    },
    onError: (error) => {
      if (error.response.data === "jwt expired")
        toast.error("Seu token de acesso expirou!");
      toast.warn("Faça login novamente!");
      localStorage.removeItem("@KENZIE-FEED:TOKEN");
      localStorage.removeItem("@KENZIE-FEED:USERID");
      localStorage.removeItem("@KENZIE-FEED:USERNAME");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
  });

  const updateNews = useMutation({
    mutationFn: async (formData) => {
      return await globalNewsApi.put(`/posts/${editingNews.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Seu post foi atualizado!");
      revalidate();
    },
    onError: (error) => {
      if (error.response.data === "jwt expired")
        toast.error("Seu token de acesso expirou!");
      toast.warn("Faça login novamente!");
      localStorage.removeItem("@KENZIE-FEED:TOKEN");
      localStorage.removeItem("@KENZIE-FEED:USERID");
      localStorage.removeItem("@KENZIE-FEED:USERNAME");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
  });

  const removeNews = useMutation({
    mutationFn: async (deletingId) => {
      await globalNewsApi.delete(`/posts/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Post removido com sucesso!");
    },
    onError: (error) => {
      if (error.response.data === "jwt expired")
        toast.error("Seu token de acesso expirou!");
      toast.warn("Faça login novamente!");
      localStorage.removeItem("@KENZIE-FEED:TOKEN");
      localStorage.removeItem("@KENZIE-FEED:USERID");
      localStorage.removeItem("@KENZIE-FEED:USERNAME");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
  });

  const addLike = useMutation({
    mutationFn: async (formData) => {
      return await globalNewsApi.post("/likes", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      getPost(showNews.id);
    },
  });

  const removeLike = useMutation({
    mutationFn: async (likeId) => {
      await globalNewsApi.delete(`/likes/${likeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      getPost(showNews.id);
    },
  });

  const setEditNewsLocalStorage = (editNews) => {
    localStorage.setItem("@KENZIE-FEED:EDITNEWS", JSON.stringify(editNews));
  };

  return (
    <NewsContext.Provider
      value={{
        showNews,
        setShowNews,
        editingNews,
        setEditingNews,
        newsList,
        userNewsList,
        getPost,
        createNews,
        updateNews,
        removeNews,
        addLike,
        removeLike,
        setEditNewsLocalStorage,
        removingPost,
        setRemovingPost,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
