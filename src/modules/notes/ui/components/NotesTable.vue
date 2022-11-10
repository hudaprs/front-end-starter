<template>
  <AppBaseTableHeader @change="appTable_onChange">
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
import { onMounted, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import type { ColumnsType } from 'ant-design-vue/lib/table';
import type { Key } from 'ant-design-vue/es/_util/type';

import { useAppTable, type IAppTableOptions } from '@/modules/app/composable/appTable';
import type { INoteItem } from '@/modules/notes/model/notes.model';
import { useNotes } from '@/modules/notes/composable/notes';

export interface Props {
  filter: Record<string, Key | null>;
}

const props = defineProps<Props>();

const { t } = useI18n();
const { notes_store, notes_fetchNotes, notes_list, notes_loading } = useNotes();
const router = useRouter();

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
  appTable_options,
} = useAppTable<INoteItem>();

watch<Record<string, Key | null>>(
  () => props.filter,
  val => {
    appTable_onChange(val);
  },
);

watch<IAppTableOptions>(
  appTable_options,
  async () => {
    const params = appTable_handleParams(
      appTable_mappingSort({ todo: 'backlog' }),
      appTable_mappingFilter({ value: 'valueFilter' }),
    );
    await notes_fetchNotes({ limit: 10, ...params });
  },
  { deep: true, flush: 'post' },
);

onMounted(async () => {
  await notes_fetchNotes({ limit: 10 });
});

onBeforeMount(() => {
  notes_store.$reset();
});

const redirectToCreateNotes = (): void => {
  router.push({ name: 'notes-create' });
};
</script>
