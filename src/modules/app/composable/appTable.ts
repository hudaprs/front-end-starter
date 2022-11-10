import { reactive } from 'vue';
import type { TablePaginationConfig, TableProps } from 'ant-design-vue';
import type { FilterValue, SorterResult } from 'ant-design-vue/es/table/interface';
import type { DefaultRecordType } from 'ant-design-vue/es/vc-table/interface';
import type { Key } from 'ant-design-vue/es/_util/type';

export type IAppTableOptions = {
  options: Record<string, string>;
  filter: Record<string, Key | null>;
};

export function useAppTable<ItemShape = DefaultRecordType>() {
  const appTable_options = reactive<IAppTableOptions>({ filter: {}, options: {} });

  const appTable_onChange = (val: Record<string, Key | null>): void => {
    appTable_options.filter = { ...appTable_options.filter, skip: null, ...val };
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

    appTable_options.options = sortOrder ? { sort: sortOrder } : {};
    appTable_options.filter = { ...appTable_options.filter, ...(filter as Record<string, Key | null>) };
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
    const options = mappingSort ?? appTable_options.options;
    const filter = mappingFilter ?? appTable_options.filter;
    return { ...options, ...filter };
  };

  return {
    appTable_options,
    appTable_handleTableChange,
    appTable_onChange,
    appTable_mappingSort,
    appTable_mappingFilter,
    appTable_handleParams,
  };
}
