<template>
  <AppBaseTableHeader :tableName="name" @change="appTable_onChange">
    <template #left>
      <span class="font-bold"> Quotes Table </span>
    </template>
  </AppBaseTableHeader>

  <a-table
    class="my-4"
    :columns="columns"
    :dataSource="notes_quotes_list.quotes"
    :loading="notes_quotes_loading"
    @change="appTable_handleTableChange"
    :pagination="false"
  />

  <AppBaseTableFooter
    :page="notes_quotes_list.skip"
    :totalData="notes_quotes_list.total"
    :limit="notes_quotes_list.limit"
    :disabled="notes_quotes_loading"
    @change="appTable_onChange"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, watch, onBeforeUnmount } from 'vue';
import { onBeforeRouteLeave, useRoute } from 'vue-router';

import type { ColumnsType } from 'ant-design-vue/lib/table';

import { useAppTable, type IAppTableOptions } from '@/modules/app/composable/useAppTable';
import type { INoteQuoteItem } from '@/modules/notes/model/notes.model';
import { useNotes } from '@/modules/notes/composable/useNotes';

const name = 'QuotesTable';

const route = useRoute();
const { notes_store, notes_fetchQuotes, notes_quotes_list, notes_quotes_loading, notes_clearAllRequest } = useNotes();

const columns: ColumnsType<INoteQuoteItem> = [
  { title: 'Id', dataIndex: 'id', sorter: true },
  { title: 'Quote', dataIndex: 'quote', sorter: true },
  { title: 'Author', dataIndex: 'author', sorter: true },
];

const { appTable_mappingSort, appTable_handleParams, appTable_handleTableChange, appTable_onChange, appTable_options } =
  useAppTable<INoteQuoteItem>(name);

const fetchQuotes = async (): Promise<void> => {
  try {
    const params = appTable_handleParams(appTable_mappingSort({ id: 'quote_id' }));
    await notes_fetchQuotes({ limit: 10, ...params });
  } catch (_) {
    //
  }
};

watch<IAppTableOptions>(
  appTable_options,
  async () => {
    await fetchQuotes();
  },
  { flush: 'post' },
);

onBeforeMount(() => {
  notes_store.$reset();
});

onBeforeUnmount(() => {
  notes_clearAllRequest();
});
</script>
