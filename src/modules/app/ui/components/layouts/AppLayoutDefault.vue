<template>
  <a-layout class="min-h-full w-full" has-sider>
    <AppLayoutDefaultSidebar v-model:collapsed="collapsed" />
    <a-layout
      class="w-full"
      :style="{
        paddingLeft: breakpoint.lg ? (collapsed ? '80px' : '200px') : 'unset',
      }"
    >
      <div class="relative">
        <AppLayoutDefaultHeader
          :collapsed="collapsed"
          @click="() => (collapsed = !collapsed)"
          :style="{ left: breakpoint.lg ? (collapsed ? '80px' : '200px') : '0' }"
        />
        <a-layout-content class="mr-2 ml-2 ml-lg-0 mb-4 mt-6 p-4 overflow-initial">
          <div class="p-3 bg-white">
            <RouterView />
          </div>
        </a-layout-content>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useBreakpoint from 'ant-design-vue/lib/_util/hooks/useBreakpoint';
import { AppLayoutDefaultHeader, AppLayoutDefaultSidebar } from './components';

const collapsed = ref<boolean>(false);

const breakpoint = useBreakpoint();
</script>
