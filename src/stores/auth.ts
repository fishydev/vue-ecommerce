import { defineStore } from "pinia";

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
      return state.token ? true : false;
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