<template>
  <a-config-provider :locale="locale === 'en' ? enUS : idID">
    <component :is="layout" />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import enUS from "ant-design-vue/es/locale/en_US";
import idID from "ant-design-vue/es/locale/id_ID";

const route = useRoute();

const layout = computed(() => {
  return (route.meta.layout ?? "empty") + "-layout";
});

const { locale } = useI18n();
</script>
