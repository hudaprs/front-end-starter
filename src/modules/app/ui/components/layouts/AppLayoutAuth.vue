<template>
  <div class="layout-auth-container">
    <div class="layout-auth-left">
      <AppBaseTitle
        title="AppLayoutAuth.vue"
        subtitle="src/modules/app/ui/components/layouts/AppLayoutAuth.vue"
        subtitleItalic
      />
    </div>
    <div class="layout-auth-right">
      <div class="layout-auth-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-auth {
  &-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-left,
  &-right {
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }

  &-left {
    background: #eee;
  }

  &-right {
    flex: 1;
  }

  &-content {
    padding: 16px;
    width: 80%;
    background: #fefefe;
    box-sizing: border-box;
    box-shadow: 0 9px 23px 0 hsl(0deg 0% 80% / 10%),
      0 15px 26px -20px rgb(0 0 0 / 10%);
    border-radius: 8px;
  }

  @include media-breakpoint-up(md) {
    &-container {
      flex-direction: row;
    }

    &-left,
    &-right {
      flex: 1;
    }

    &-content {
      width: 430px;
      padding: 32px;
    }
  }
}
</style>
