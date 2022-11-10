import http from '@/plugins/axios';
import { defineStore } from 'pinia';
import type { INoteItem, INotesResponse, INotesStore } from '../model/notes.model';

export const useNotesStore = defineStore('notes', {
  state: (): INotesStore => ({
    notes_loading: false,
    notes_list: { todos: [], limit: 0, skip: 0, total: 0 },
  }),

  actions: {
    async notes_createNotes(payload: Partial<INoteItem>): Promise<INoteItem> {
      try {
        this.notes_loading = true;

        const { data } = await http.post<INoteItem>('/todos/add', payload);
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.notes_loading = false;
      }
    },
    async notes_fetchNotes(params?: Record<string, string | number>): Promise<INotesResponse> {
      try {
        this.notes_loading = true;

        const { data } = await http.get<INotesResponse>('/todos', { params });
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
