<template>
  <a-layout-header class="fixed z-10 right-0 bg-white p-0">
    <div class="flex items-center justify-between py-0 px-4">
      <!-- Left Side -->
      <a-space size="middle" class="flex align-center">
        <menu-outlined @click="emit('click')" class="ml-1" />
        <div class="flex flex-col gap-1 leading-none">
          <AppBaseLabel :title="route.meta.title ? t(route.meta.title) : route.path" :size="14" />
          <AppBaseBreadcrumb class="text-xs" />
        </div>
      </a-space>

      <!-- Right Side -->
      <div>
        <a-select :value="locale" style="width: 120px" @change="changeLang">
          <a-select-option value="id">Indonesia</a-select-option>
          <a-select-option value="en">English</a-select-option>
        </a-select>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { MenuOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const route = useRoute();
const { t, locale } = useI18n();
const changeLang = () => {
  locale.value = locale.value == 'en' ? 'id' : 'en';
};
</script>
