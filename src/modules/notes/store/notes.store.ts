import type { AxiosRequestConfig } from 'axios';
import { defineStore } from 'pinia';

import http from '@/plugins/axios';
import type { INoteItem, INotesResponse, INotesStore } from '@/modules/notes/model/notes.model';

export const useNotesStore = defineStore('notes', {
  state: (): INotesStore => ({
    notes_loading: false,
    notes_list: { todos: [], limit: 0, skip: 0, total: 0 },
  }),

  actions: {
    async notes_createNotes(payload: Partial<INoteItem>, requestConfig?: AxiosRequestConfig): Promise<INoteItem> {
      try {
        this.notes_loading = true;

        const { data } = await http.post<INoteItem>('/todos/add', payload, { ...requestConfig });
        return Promise.resolve(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.notes_loading = false;
      }
    },
    async notes_fetchNotes(
      params?: Record<string, string | number | null>,
      requestConfig?: AxiosRequestConfig,
    ): Promise<INotesResponse> {
      try {
        this.notes_loading = true;
        console.log(this.notes_loading);
        const { data } = await http.get<INotesResponse>('/todos', { params, ...requestConfig });
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
