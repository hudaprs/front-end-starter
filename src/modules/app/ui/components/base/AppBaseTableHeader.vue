<template>
  <a-space class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center text-center">
    <!-- Left Side -->
    <div class="flex justify-start">
      <slot name="left" />
    </div>

    <!-- Select Limit -->
    <a-space v-if="!props.hideLimit" class="flex items-center justify-center">
      <AppBaseLabel :title="t('common.show')" size="12" :isBold="false" />
      <a-select v-model:value="option" style="width: 70px" :options="optionList" @change="onChangeLimit" />
      <AppBaseLabel :title="t('common.entries')" size="12" :isBold="false" />
    </a-space>

    <!-- Search -->
    <div class="flex flex-col lg:flex-row align-center justify-end">
      <a-input
        v-if="!props.hideSearch"
        v-model:value="search"
        :placeholder="t('common.search')"
        :loading="props.loading"
        :style="{ width: breakpoint.lg ? '175px' : '100%' }"
        allowClear
        @change="onChangeSearch"
      >
        <template #prefix>
          <search-outlined />
        </template>
      </a-input>
      <slot name="right" />
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDebounceFn } from '@vueuse/shared';

import type { SelectProps } from 'ant-design-vue';
import useBreakpoint from 'ant-design-vue/lib/_util/hooks/useBreakpoint';
import type { Key } from 'ant-design-vue/es/_util/type';

import { SearchOutlined } from '@ant-design/icons-vue';

import { useAppTable, type IAppTableStateOptions } from '@/modules/app/composable/useAppTable';

export interface Props {
  tableName: string;
  hideLimit?: boolean;
  hideSearch?: boolean;
  loading?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'change', val: Record<string, Key | null>): void;
}>();

const { t } = useI18n();
const breakpoint = useBreakpoint();
const { appTable_state } = useAppTable(props.tableName);

const debounceSeach = useDebounceFn((val: Event) => {
  emit('change', { search: (val.target as HTMLInputElement).value || null });
}, 500);

const search = ref<string>('');
const onChangeSearch = debounceSeach;

const option = ref<number>(10);
const onChangeLimit = (val: number) => emit('change', { limit: val });

const optionList = ref<SelectProps['options']>([
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 50, value: 50 },
  { label: 100, value: 100 },
]);

onBeforeMount(() => {
  const savedState = appTable_state.value[props.tableName] || {};

  if (savedState.search) search.value = savedState.search;
  if (savedState.limit) option.value = savedState.limit;

  emit('change', { ...savedState, changeType: 'saved-state' });
});
</script>
