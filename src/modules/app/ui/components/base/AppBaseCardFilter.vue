<template>
  <a-space
    class="flex items-center flex-col !justify-center md:flex-row md:!justify-between mb-4 p-4 rounded-md border border-slate-100 border-solid"
  >
    <slot />
    <a-button type="primary" @click="emit('click')" outlined>Filter</a-button>
  </a-space>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'click'): void }>();
</script>
