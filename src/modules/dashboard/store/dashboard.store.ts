import http from "@/plugins/axios";
import { defineStore } from "pinia";
import type {
  IDashboardPostItem,
  IDashboardStore,
} from "../model/dashboard.model";

export const useDashboardStore = defineStore("dashboard", {
  state: (): IDashboardStore => ({
    dashboard_loading: false,
    dashboard_posts: [],
  }),

  actions: {
    async fetchPosts(): Promise<IDashboardPostItem[]> {
      try {
        this.dashboard_loading = true;
        const { data } = await http.get<IDashboardPostItem[]>("/posts");
        this.dashboard_posts = data;
        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        this.dashboard_loading = false;
      }
    },
  },
});
