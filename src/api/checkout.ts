import axios from "@/lib/axios";

export const getCheckoutHistory = async () => {
  return axios.get("/checkout");
};

export const checkoutCart = async () => {
  return axios.post("/checkout");
};

export const getCheckoutContent = async (checkoutId: number) => {
  return axios.get(`/checkout/${checkoutId}`);
};
