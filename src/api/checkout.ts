import axios from "@/lib/axios";
import type { CheckoutPayload } from "@/types";

export const getCheckoutHistory = async () => {
  return axios.get("/checkout");
};

export const checkoutCart = async (payload: CheckoutPayload) => {
  return axios.post("/checkout", payload);
};
