import axios from "axios";

const app_api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export default app_api;

const unsplash_api = axios.create({
  baseURL: import.meta.env.VITE_UNSPLASH_API_URL,
});

export { unsplash_api };