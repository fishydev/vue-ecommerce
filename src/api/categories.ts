import axios from "@/lib/axios";

export const getCategories = async () => {
  return axios.get("/category");
};

export const getCategoryOptions = async () => {
  return axios.get("/category/option");
};
