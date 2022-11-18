<template>
  <AppBaseTableHeader :tableName="name" @change="appTable_onChange">
    <template #left>
      <a-button type="danger" @click="redirectToCreateNotes">{{ t('notes.create') }}</a-button>
    </template>
  </AppBaseTableHeader>

  <a-table
    class="my-4"
    :columns="columns"
    :dataSource="notes_list.todos"
    :loading="notes_loading"
    @change="appTable_handleTableChange"
    :pagination="false"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'completed'">{{ text ? t('notes.completed') : t('notes.todo') }}</template>
    </template>
  </a-table>

  <AppBaseTableFooter
    :page="notes_list.skip"
    :totalData="notes_list.total"
    :limit="notes_list.limit"
    :disabled="notes_loading"
    @change="appTable_onChange"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, watch, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';

import type { ColumnsType } from 'ant-design-vue/lib/table';
import type { Key } from 'ant-design-vue/es/_util/type';

import { useAppTable, type IAppTableOptions } from '@/modules/app/composable/useAppTable';
import type { INoteItem } from '@/modules/notes/model/notes.model';
import { useNotes } from '@/modules/notes/composable/useNotes';

export interface Props {
  filter: Record<string, Key | null>;
}

const name = 'NotesTable';

const props = defineProps<Props>();

const { t } = useI18n();
const { notes_store, notes_fetchNotes, notes_list, notes_loading, notes_clearAllRequest } = useNotes();
const router = useRouter();
const route = useRoute();

const columns: ColumnsType<INoteItem> = [
  { title: 'User Id', dataIndex: 'userId', sorter: true },
  { title: 'Title', dataIndex: 'todo', sorter: true },
  { title: 'Completed', dataIndex: 'completed', sorter: true },
];

const {
  appTable_mappingFilter,
  appTable_mappingSort,
  appTable_handleParams,
  appTable_handleTableChange,
  appTable_onChange,
  appTable_clearTableState,
  appTable_options,
} = useAppTable<INoteItem>(name);

watch<Record<string, Key | null>>(
  () => props.filter,
  val => {
    appTable_onChange(val);
  },
);

const fetchNotes = async (): Promise<void> => {
  try {
    const params = appTable_handleParams(
      appTable_mappingSort({ todo: 'backlog' }),
      appTable_mappingFilter({ value: 'valueFilter' }),
    );
    await notes_fetchNotes({ limit: 10, ...params });
  } catch (_) {
    //
  }
};

watch<IAppTableOptions>(
  appTable_options,
  async () => {
    await fetchNotes();
  },
  { deep: true, flush: 'post' },
);

onBeforeMount(() => {
  notes_store.$reset();
});

onBeforeUnmount(() => {
  notes_clearAllRequest();
});

onBeforeRouteLeave(routeLeave => {
  if (routeLeave.meta.menuGroup !== route.meta.menuGroup) appTable_clearTableState();
});

const redirectToCreateNotes = (): void => {
  router.push({ name: 'notes-create' });
};
</script>
