<template>
  <NotesFilter @change="onChangeFilter" />
  <NotesTable :filter="filter" />
  <a-divider class="my-5" />
  <NotesQuotesTable />
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Ant Design
import type { Key } from 'ant-design-vue/es/_util/type';

// Components
import NotesFilter from './components/NotesFilter.vue';
import NotesTable from './components/NotesTable.vue';
import NotesQuotesTable from './components/NotesQuotesTable.vue';

const filter = ref<Record<string, Key | null>>({});

const onChangeFilter = (val: Record<string, Key | null>) => {
  filter.value = { ...val };
};
</script>
