import Axios, { type AxiosInstance } from "axios";
import { ElNotification } from "element-plus";

const baseUrl = "http://localhost:3000/api/v1";

const axios: AxiosInstance = Axios.create({
  baseURL: baseUrl,
  timeout: 2000,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      ElNotification({
        title: "Error",
        message: `${error.response.data} (${error.response.status})`,
        type: "error",
      });
    } else {
      ElNotification({
        title: "Error",
        message: error,
        type: "error",
      });
    }

    return Promise.reject(error);
  }
);

export default axios;
