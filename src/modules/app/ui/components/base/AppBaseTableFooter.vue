<template>
  <a-space class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <!-- Show Item Information -->
    <div class="flex !justify-center lg:!justify-start">
      {{ t('common.show') }} {{ minRows }} - {{ maxRows }} {{ t('common.of') }} {{ props.totalData }}
    </div>

    <!-- Pagination -->
    <div class="flex flex-col lg:flex-row align-center justify-end">
      <a-pagination
        :current="props.page + 1"
        :total="props.totalData"
        :page-size="props.totalData ? props.limit : 0"
        show-less-items
        @change="onChangePage"
        :show-total="onShowTitle"
        :showSizeChanger="false"
        :disabled="props.disabled"
      />
    </div>
  </a-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export interface Props {
  totalData?: number;
  limit?: number;
  page?: number;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  totalData: 0,
  limit: 10,
  page: 1,
});

const { t } = useI18n();

const minRows = ref<number>(0);
const maxRows = ref<number>(0);

const emit = defineEmits<{
  (e: 'change', value: Record<string, string | number>): void;
}>();

const onShowTitle = (_total: number, range: number[]): void => {
  minRows.value = range[0] || 0;
  maxRows.value = range[1] || 0;
};

const onChangePage = (page: number): void => emit('change', { skip: page - 1 });
</script>
