<template>
  <AppBaseTableHeader @change="onChangeSearch">
    <template #left>
      <a-button type="danger">Create</a-button>
    </template>
  </AppBaseTableHeader>
</template>
  
<script setup lang="ts">
import { MenuOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";

const emit = defineEmits<{
  (e: "click"): void;
}>();

const { t, locale } = useI18n()

const onChangeSearch = (search: string) => {
  console.log({ search })
}
</script>
  