import axios from "@/lib/axios";

export const addItem = (itemUuid: string) => {
  return axios.put(`/cart/add/${itemUuid}`);
};

export const getCartSummary = () => {
  return axios.get(`/cart/summary`);
};

export const getCartContent = () => {
  return axios.get(`/cart`);
};

export const substractItem = async (cartItemId: number) => {
  return axios.put(`/cart/substract/${cartItemId}`);
};

export const deleteItem = async (cartItemId: number) => {
  return axios.delete(`/cart/${cartItemId}`);
};

export const getCheckoutCartItems = async (checkoutId: number) => {
  return axios.get(`/cart/checkout/${checkoutId}`);
};
