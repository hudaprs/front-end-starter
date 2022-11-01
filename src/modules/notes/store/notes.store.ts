import http from "@/plugins/axios";
import { defineStore } from "pinia";
import type { INoteItem, INotesStore, } from "../model/notes.model";

export const useDashboardStore = defineStore("notes", {
  state: (): INotesStore => ({
    notes_loading: false,
    notes_list: [],
  }),

  actions: {
    async fetchNotes(): Promise<INoteItem[]> {
      try {
        this.notes_loading = true;

        const { data } = await http.get<INoteItem[]>("/todos");
        this.notes_list = data;

        return Promise.resolve(data);
      } catch (err) {
        return Promise.reject(err);
      } finally {
        this.notes_loading = false;
      }
    },
  },
});
