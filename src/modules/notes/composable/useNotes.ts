import { storeToRefs } from 'pinia';

import { useHttpAbort } from '@/modules/app/composable/useHttpAbort';

import { useNotesStore } from '@/modules/notes/store/notes.store';
import type { INoteItem } from '@/modules/notes/model/notes.model';
import { NOTES_REQUEST } from '@/modules/notes/constants/notes.constant';

export const useNotes = () => {
  const { httpAbort_registerAbort, httpAbort_clearAllRequest } = useHttpAbort();
  const store = useNotesStore();
  const storeRefs = storeToRefs(store);
  const { notes_list, notes_loading, notes_quotes_list, notes_quotes_loading } = storeRefs;

  const notes_fetchNotes = async (params?: Record<string, string | number | null>) => {
    try {
      const data = await store.notes_fetchNotes(params, { ...httpAbort_registerAbort(NOTES_REQUEST.FETCH_NOTES) });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const notes_createNotes = async (payload: Partial<INoteItem>) => {
    try {
      const data = await store.notes_createNotes(payload, { ...httpAbort_registerAbort(NOTES_REQUEST.CREATE_NOTES) });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const notes_fetchQuotes = async (params?: Record<string, string | number | null>) => {
    try {
      const data = await store.notes_fetchQuotes(params, { ...httpAbort_registerAbort(NOTES_REQUEST.FETCH_QUOTES) });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    notes_store: store,
    notes_list,
    notes_loading,
    notes_quotes_list,
    notes_quotes_loading,
    notes_fetchNotes,
    notes_createNotes,
    notes_fetchQuotes,
    notes_clearAllRequest: httpAbort_clearAllRequest,
  };
};
