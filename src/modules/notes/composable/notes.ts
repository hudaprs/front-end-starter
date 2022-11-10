import { storeToRefs } from 'pinia';
import { useNotesStore } from '../store/notes.store';

export const useNotes = () => {
  const store = useNotesStore();
  const storeRefs = storeToRefs(store);
  const { notes_list, notes_loading } = storeRefs;
  const { notes_fetchNotes, notes_createNotes } = store;

  return {
    notes_store: store,
    notes_list,
    notes_loading,
    notes_fetchNotes,
    notes_createNotes,
  };
};
