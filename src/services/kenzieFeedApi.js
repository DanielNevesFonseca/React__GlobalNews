import axios from "axios";

export const kenzieFeedApi = axios.create({
  baseURL: "https://kenzie-feed-api-45c0.onrender.com",
  timeout: 8 * 1000,
})