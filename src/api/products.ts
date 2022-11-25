import axios from "@/lib/axios";
import type { ProductFilter } from "@/types";

export const getProducts = async (filters?: ProductFilter) => {
  return axios.post("/product", {
    data: filters,
  });
};

export const getProductByUuid = async (uuid: string) => {
  return axios.get(`/product/${uuid}`);
};
