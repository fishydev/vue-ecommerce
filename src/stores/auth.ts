import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
    };
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    isAuth(state) {
      if (!state.token) return false;
      const decoded = jwt_decode(state.token) as any;
      console.log(decoded.exp);
      return Math.floor(Date.now() / 1000) < decoded.exp;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", token);
    },
    clearToken() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
