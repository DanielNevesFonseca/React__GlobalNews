import axios from "axios";

export const globalNewsApi = axios.create({
  baseURL: "https://global-news-fakeapi.onrender.com",
  timeout: 8 * 1000,
})