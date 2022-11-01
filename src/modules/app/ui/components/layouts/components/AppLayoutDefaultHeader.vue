<template>
  <a-layout-header class="fixed z-10 right-0 bg-white p-0">
    <div class="flex items-center justify-between py-0 px-4">
      <!-- Left Side -->
      <div>
        <menu-outlined @click="emit('click')" class="ml-1" />
      </div>

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
import { MenuOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";

const emit = defineEmits<{
  (e: "click"): void;
}>();

const { t, locale } = useI18n()
const changeLang = () => {
  locale.value = locale.value == "en" ? "id" : "en";
};
</script>
