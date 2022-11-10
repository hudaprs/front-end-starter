<template>
  <NotesFilter @change="onChangeFilter" />
  <NotesTable :filter="filter" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Ant Design
import type { Key } from 'ant-design-vue/es/_util/type';

// Components
import NotesFilter from './components/NotesFilter.vue';
import NotesTable from './components/NotesTable.vue';

const filter = ref<Record<string, Key | null>>({});

const onChangeFilter = (val: Record<string, Key | null>) => {
  filter.value = { ...val };
};
</script>
