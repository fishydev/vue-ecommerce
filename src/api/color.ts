import axios from "@/lib/axios";

export const getColorOptions = async () => {
  return axios.get("/color/option");
};
