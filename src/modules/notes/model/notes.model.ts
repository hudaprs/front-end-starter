import type { IPagination } from '@/modules/app/model/app.model';

export type INotesStatus = 'todo' | 'in_progress' | 'done';

export type INoteItem = {
  userId: number | string;
  id: number;
  todo: string;
  completed: boolean;
};

export type INoteQuoteItem = {
  id: number;
  quote: string;
  author: boolean;
};

export type INotesResponse = IPagination & {
  todos: INoteItem[];
};

export type INotesQuotesResponse = IPagination & {
  quotes: INoteQuoteItem[];
};

export type INotesStore = {
  notes_loading: boolean;
  notes_list: INotesResponse;

  notes_quotes_loading: boolean;
  notes_quotes_list: INotesQuotesResponse;
};
