import axios from "@/lib/axios";

export const getProducts = async (typeUuids?: string[], colors?: string[]) => {
  return axios.get("/product", {
    data: {
      ...(typeUuids && typeUuids.length > 0 && { type: typeUuids }),
      ...(colors && colors.length > 0 && { type: colors }),
    },
  });
};
