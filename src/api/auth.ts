import axios from "@/lib/axios";
import type { LoginPayload, RegisterPayload } from "@/types";

export const register = async (payload: RegisterPayload) => {
  return axios.post("/user", payload);
};

export const login = async (payload: LoginPayload) => {
  return axios.post("/user/auth", payload);
};
