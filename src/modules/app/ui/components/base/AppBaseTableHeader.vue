<template>
  <a-space class="grid grid-cols-1 lg:grid-cols-3 gap-10  items-center">
    <!-- Left Side -->
    <div class="flex justify-start">
      <slot name="left" />
    </div>

    <!-- Select Limit -->
    <a-space v-if="!props.hideLimit" class="flex items-center justify-center">
      <AppBaseLabel :title="t('common.show')" size="12" :isBold="false" />
      <a-select v-model:value="option" style="width: 70px" :options="optionList"></a-select>
      <AppBaseLabel :title="t('common.entries')" size="12" :isBold="false" />
    </a-space>

    <div class="flex flex-col lg:flex-row align-center justify-end">
      <a-input-search v-if="!props.hideSearch" v-model:value="search" :placeholder="t('common.search')"
        :loading="props.loading" :style="{ width: breakpoint.lg ? '175px' : '100%' }" />
      <slot name="right" />
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import type { SelectProps } from 'ant-design-vue';
import useBreakpoint from 'ant-design-vue/lib/_util/hooks/useBreakpoint';

export interface Props {
  hideLimit?: boolean;
  hideSearch?: boolean;
  loading?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const { t } = useI18n();
const breakpoint = useBreakpoint();

const search = ref<string>('');
const option = ref<number>(10);
const optionList = ref<SelectProps['options']>([
  { label: 5, value: 5 }, { label: 10, value: 10 }, { label: 50, value: 50 }, { label: 100, value: 100 }
])

watch<string>(search, (val) => emit('change', val));
</script>