<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="breadcrumb in crumbs" :href="breadcrumb.href">
      <router-link v-if="breadcrumb.href" :to="breadcrumb.href">
        {{ breadcrumb.name }}
      </router-link>
      <span v-else>{{ breadcrumb.name }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const route = useRoute();
const { t } = useI18n();

const crumbs = computed(() => {
  const list: { name: string; href?: string }[] = [];
  route.matched.forEach(e => {
    if (e.meta.breadcrumb) {
      list.push({ name: t(e.meta.breadcrumb), href: e.meta.breadcrumbDisabled || e.path === route.path ? undefined : e.path });
    }
  });

  return list;
});
</script>
