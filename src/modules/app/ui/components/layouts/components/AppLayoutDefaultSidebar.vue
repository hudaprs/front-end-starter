<template>
  <!-- Desktop mode -->
  <a-layout-sider v-if="breakpoint.lg" class="fixed top-0 bottom-0 left-0 overflow-auto" :collapsed="props.collapsed"
    @update:collapsed="emit('update:collapsed', !props.collapsed)" theme="light">
    <div class="logo" />
    <a-menu :selectedKeys="[route.name]" mode="inline">
      <a-menu-item v-for="(menu) in FRONT_MENUS" :key="(menu.route as RouteLocationNamedRaw).name">
        <RouterLink :to="(menu.route as RouteLocationRaw)" :title="t(menu.title)">
          <em :class="menu.icon" class="menu-icon" />
          <span class="nav-text">{{ t(menu.title) }}</span>
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>

  <!-- Tablet / Mobile Mode -->
  <a-drawer title="Menu" theme="dark" placement="left" class="bg-primary" :closable="false"
    :visible="!breakpoint.lg && !props.collapsed" width="275"
    @update:visible="emit('update:collapsed', !props.collapsed)">
    <a-menu>
      <a-menu-item v-for="(menu, index) in FRONT_MENUS" :key="index"
        @click="emit('update:collapsed', !props.collapsed)">
        <RouterLink :to="(menu.route as RouteLocationRaw)" :title="t(menu.title)">
          <em :class="menu.icon" class="menu-icon" />
          <span class="nav-text">{{ t(menu.title) }}</span>
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </a-drawer>
</template>

<script setup lang="ts">
import { FRONT_MENUS } from "@/modules/app/constant/menus.constant";
import useBreakpoint from "ant-design-vue/lib/_util/hooks/useBreakpoint";
import { useI18n } from "vue-i18n";
import { type RouteLocationRaw, type RouteLocationNamedRaw, useRoute } from "vue-router";

export interface Props {
  collapsed: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:collapsed", value: boolean): void;
}>();

const breakpoint = useBreakpoint();
const { t } = useI18n()
const route = useRoute()
</script>

<style lang="scss">
.logo {
  height: 32px;
  background: rgba(128, 126, 126, 0.39);
  margin: 16px;
}

.ant-tooltip-inner a,
.ant-menu-title-content a {
  display: flex;
  align-items: center;
}

.menu {
  &-icon {
    font-size: 24px;
    padding-right: 16px;
    margin-right: 16px;
  }
}
</style>
