<template>
  <div class="dashboard-item">
    <AppBaseTitle :title="props.id" :subtitle="combineTitleBody" />
    <small>
      <strong class="d-block mb-0">DashboardListItem.vue</strong>
      src/modules/dashboard/ui/components/DashboardListItem.vue
    </small>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Props {
  id: number;
  title: string;
  body: string;
}
const props = defineProps<Props>();

const combineTitleBody = computed(() => {
  return `${props.title} : ${props.body}`;
});
</script>

<style lang="scss" scoped>
.dashboard-item {
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: 0 9px 23px 0 hsl(0deg 0% 80% / 10%),
    0 15px 26px -20px rgb(0 0 0 / 10%);
  border: 1px solid #eee;
  word-break: break-all;
  hyphens: auto;
}
</style>
