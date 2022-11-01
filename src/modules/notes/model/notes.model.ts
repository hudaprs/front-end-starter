export type INotesStatus = 'todo' | 'in_progress' | 'done'

export type INoteItem = {
    userId: number;
    id: number;
    title: string;
    status: INotesStatus;
};

export type INotesStore = {
    notes_loading: boolean;
    notes_list: INoteItem[];
};
