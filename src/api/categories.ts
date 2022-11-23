import axios from "@/lib/axios";
import type { Category } from "@/types";

export const getCategories = async () => {
  return axios.get("/category");
};

export const getCategoryOptions = async () => {
  return axios.get("/category/option");
};
