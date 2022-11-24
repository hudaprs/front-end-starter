import { defineStore } from 'pinia';
import type { IAppTableStateOptions } from '@/modules/app/composable/useAppTable';

export type ITableState = {
  table_state: Record<string, IAppTableStateOptions>;
};

export const useTableStore = defineStore('table', {
  state: (): ITableState => ({ table_state: {} }),

  actions: {
    table_setTableState: function (tableName: string, tableState: IAppTableStateOptions): void {
      this.table_state = {
        ...this.table_state,
        [tableName]: tableState,
      };
    },
    table_clearTableState: function (tableName: string): void {
      if (this.table_state[tableName]) delete this.table_state[tableName];
    },
    table_clearAllTableState: function (): void {
      this.$reset();
    },
  },
});
