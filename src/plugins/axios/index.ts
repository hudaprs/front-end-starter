import { useAuthStore } from "@/modules/auth/store/auth.store";
import axios, {
  type AxiosRequestConfig,
  type AxiosInstance,
  type AxiosError,
} from "axios";

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
  const authStore = useAuthStore();

  // Fix Object is possibly 'undefined'
  // https://stackoverflow.com/questions/70085215/how-to-fix-config-headers-authorization-object-is-possibly-undefined-when-usin
  if (config.headers === undefined) {
    config.headers = {};
  }

  if (authStore.auth_isAuthenticated) {
    config.headers.Authorization = `Bearer ${authStore.auth_token}`;
  }
  return config;
});

http.interceptors.response.use(undefined, (error: AxiosError) => {
  return Promise.reject(error);
});

export default http;
