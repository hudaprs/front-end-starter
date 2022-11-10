<template>
  <AppBaseCardFilter @click="onChangeFilter">
    <a-select ref="select" v-model:value="filter.value" style="width: 150px" placeholder="Choose Value" allowClear>
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
  </AppBaseCardFilter>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Key } from 'ant-design-vue/es/_util/type';

const emit = defineEmits<{ (e: 'change', value: Record<string, Key | null>): void }>();

const filter = ref<Record<string, Key | null>>({ value: null });

const onChangeFilter = () => {
  emit('change', filter.value);
};
</script>
