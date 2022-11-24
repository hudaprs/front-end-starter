import { reactive } from 'vue';

import type { TablePaginationConfig, TableProps } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import type { DefaultRecordType } from 'ant-design-vue/es/vc-table/interface';
import type { Key } from 'ant-design-vue/es/_util/type';

import { storeToRefs } from 'pinia';

import { useTableStore } from '@/modules/app/store/table.store';

export type IAppTableStateOptions = {
  sort?: string | null;
  skip?: number;
  limit?: number;
  search?: string;
};

export type IAppTableOptions = {
  options: IAppTableStateOptions;
  filter: Record<string, Key | null>;
};

export function useAppTable<ItemShape = DefaultRecordType>(tableName: string) {
  const appTable_options = reactive<IAppTableOptions>({ filter: { limit: 10 }, options: {} });
  const appTable_store = useTableStore();
  const appTable_state = storeToRefs(appTable_store).table_state;

  const appTable_saveTableState = (params: Record<string, Key | null>): void => {
    const paramsSaved: IAppTableStateOptions = {
      sort: params.sort as string,
      skip: params.skip as number,
      limit: params.limit as number,
      search: params.search as string,
    };
    appTable_store.table_setTableState(tableName, paramsSaved);
  };

  const appTable_clearTableState = () => {
    appTable_store.table_clearTableState(tableName);
  };

  const appTable_onChange = (val: Record<string, Key | null>): void => {
    const { changeType, ...filter } = val;
    if (changeType === 'saved-state') appTable_options.filter = { ...appTable_options.filter, ...filter };
    else appTable_options.filter = { ...appTable_options.filter, skip: null, ...val };
  };

  const appTable_handleTableChange: TableProps<ItemShape>['onChange'] = (
    _pag?: TablePaginationConfig,
    filter?: Record<string, FilterValue | null | string>,
    sorter?: SorterResult<ItemShape> | SorterResult<ItemShape>[],
    // extra: TableCurrentDataSource<ItemShape>,
  ): void => {
    const sorted = sorter && 'length' in sorter ? sorter[0] : sorter;
    const field = sorted ? (sorted.field as Key) : null;
    const order = sorted ? sorted.order || null : null;
    const sortOrder = order ? `${field}|${order === 'ascend' ? 'asc' : 'desc'}` : null;

    appTable_options.options = { sort: sortOrder };
    appTable_options.filter = { ...appTable_options.filter, skip: null, ...(filter as Record<string, Key | null>) };
  };

  const appTable_mappingSort = (mapping: Record<string, string> = {}): Record<string, string | null> => {
    const [sortField, sortOrder] = appTable_options.options?.sort ? appTable_options.options.sort.split('|') : [null, null];
    const field = sortField ?? null;
    const order = sortOrder ?? null;
    const mappedField = field ? mapping[field] ?? field : null;

    const newValue = mappedField && order ? `${mappedField}|${order}` : null;
    return {
      sort: newValue,
    };
  };

  const appTable_mappingFilter = (mapping: Record<string, string>): Record<string, Key | null> => {
    return Object.keys(appTable_options.filter).reduce((acc, key) => {
      acc[mapping?.[key] ?? key] = appTable_options.filter[key];
      return acc;
    }, {} as Record<string, Key | null>);
  };

  const appTable_handleParams = (mappingSort?: Record<string, string | null>, mappingFilter?: Record<string, Key | null>) => {
    const savedState = appTable_state.value[tableName] || {};

    const options = appTable_options.options.sort !== undefined ? mappingSort : { sort: savedState.sort || null };
    const filter = mappingFilter ?? appTable_options.filter;

    const finalParams = { ...savedState, ...filter, ...options };
    appTable_saveTableState(finalParams);

    return finalParams;
  };

  return {
    appTable_options,
    appTable_state,
    appTable_handleTableChange,
    appTable_onChange,
    appTable_mappingSort,
    appTable_mappingFilter,
    appTable_handleParams,
    appTable_clearTableState,
  };
}
