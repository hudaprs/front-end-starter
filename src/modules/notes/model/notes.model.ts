import type { IPagination } from '@/modules/app/model/app.model';

export type INotesStatus = 'todo' | 'in_progress' | 'done';

export type INoteItem = {
  userId: number | string;
  id: number;
  todo: string;
  completed: boolean;
};

export type INotesResponse = IPagination & {
  todos: INoteItem[];
};

export type INotesStore = {
  notes_loading: boolean;
  notes_list: INotesResponse;
};
