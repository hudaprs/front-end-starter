<template>
  <div>
    <div v-if="dashboard_loading">Loading...</div>
    <div v-else class="dashboard-list-container p-4">
      <DashboardListItem
        v-for="post in dashboard_posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
        class="mb-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from "@/modules/dashboard/store/dashboard.store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import DashboardListItem from "./components/DashboardListItem.vue";

const dashboardStore = useDashboardStore();
const store = storeToRefs(dashboardStore);
const { dashboard_posts, dashboard_loading } = store;

onMounted(async () => {
  await dashboardStore.fetchPosts();
});
</script>

<style lang="scss" scoped>
.dashboard-list-container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
