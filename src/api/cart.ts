import axios from "@/lib/axios";

export const addItemCart = (itemUuid: string) => {
  return axios.post(`/cart/${itemUuid}`);
};

export const getCartSummary = () => {
  return axios.get(`/cart/summary`);
};
