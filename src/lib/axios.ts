import Axios, { type AxiosInstance } from "axios";
import { ElNotification } from "element-plus";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const baseUrl = "http://localhost:3000/api/v1";

const axios: AxiosInstance = Axios.create({
  baseURL: baseUrl,
  timeout: 2000,
});

axios.interceptors.request.use((config) => {
  const auth = useAuthStore();
  if (config.headers) {
    const token = auth.getToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    const auth = useAuthStore();
    const router = useRouter();
    if (response.status === 401) {
      ElNotification({
        title: "Session Expired",
        message: `Your session has expired. Please login again`,
        type: "error",
        offset: 75,
      });
      auth.clearToken();
      router.push({ name: "home" });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      ElNotification({
        title: "Error",
        message: `${error.response.data} (${error.response.status})`,
        type: "error",
        offset: 75,
      });
    } else {
      ElNotification({
        title: "Error",
        message: error,
        type: "error",
        offset: 75,
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
