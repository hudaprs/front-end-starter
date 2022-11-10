import { defineStore } from "pinia";
import type { IAuthForm, IAuthStore } from "../model/auth.model";

export const useAuthStore = defineStore("auth", {
  state: (): IAuthStore => ({
    auth_isAuthenticated: false,
    auth_token: null,
    auth_userInfo: null,
    auth_loading: false,
  }),

  getters: {
    // Basically not-needed to register getters if getter same name with the state, because in autocomplete will be overlap
    // auth_isAuthenticated(state): boolean {
    //   return state.auth_isAuthenticated;
    // },
    // auth_userInfo(state): IAuthUserInfo | null {
    //   return state.auth_userInfo;
    // },
  },

  actions: {
    async auth_doLogin(payload: IAuthForm): Promise<boolean> {
      console.log("Payload", payload);

      try {
        this.$patch({
          auth_isAuthenticated: true,
          auth_token: "FAKE-TOKEN",
          auth_userInfo: {
            fullname: "JohnDoe",
            role: 1,
            location: {
              ...payload.location
            }
          },
          auth_loading: true,
        });
        return Promise.resolve(true);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        this.auth_loading = false;
      }
    },
    auth_doLogout(): void {
      this.$reset();
    },
  },

  // For activated persist state, you can add the code below:
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        key: "auth",
        paths: ["auth_isAuthenticated", "auth_token", "auth_userInfo"],
      },
    ],
  },
});
