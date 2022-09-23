<template>
  <div class="app-header">
    <div class="container app-header-menu">
      <AppBaseTitle
        title="AppLayoutPublicHeader.vue"
        subtitle="src/modules/app/ui/components/layouts/components/AppLayoutPublicHeader.vue"
      />
      <ul class="mb-4">
        <li v-for="menu in FRONT_MENUS" :key="menu.title">
          <RouterLink
            :to="(menu.route as RouteLocationRaw)"
            :title="menu.title"
          >
            <i :class="menu.icon" class="menu-icon" />
            <div class="menu-content">
              <div class="menu-title">{{ menu.title }}</div>
              <div class="menu-desc">{{ menu.desc }}</div>
            </div>
          </RouterLink>
        </li>
      </ul>
      <a-button type="primary" @click="onLogout">Logout</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FRONT_MENUS } from "@/modules/app/constant/menus.constant";
import { useAuthStore } from "@/modules/auth/store/auth.store";
import { useRouter, type RouteLocationRaw } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const onLogout = () => {
  authStore.auth_doLogout();
  router.replace({ name: "login" });
};
</script>

<style lang="scss">
$hero-size: 320px;

.app-header {
  background: $primary-color url("@/modules/app/assets/img/pattern-bg.svg");
  color: #fff;
  padding: 20px 16px;
  position: sticky;
  top: 0;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  &-hero {
    width: $hero-size;
    height: $hero-size;
    display: block;
    padding: 2px 8px;
    border-radius: 6px;
    background: #fff;
    position: relative;
  }

  &-logo {
    display: inline-flex;
    font-weight: bold;
    align-items: center;

    img {
      background: #fff;
      border-radius: 4px;
      height: 50px;
      padding: 8px;
    }

    &-text {
      line-height: 1.3em;
      text-transform: uppercase;
    }
  }

  &-menu {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;

      li {
        a {
          display: flex;
          height: 100%;
          align-items: center;
          padding: 8px 16px;
          border: 1px solid #fff;
          color: #fff;
          border-radius: 4px;
          background: rgba($color: #fff, $alpha: 0.1);
          backdrop-filter: blur(10px);

          &:hover {
            background: #fff;
            color: $primary-color;

            .menu {
              &-icon {
                border-right-color: $primary-color;
              }
            }
          }

          .menu {
            &-icon {
              font-size: 30px;
              padding-right: 16px;
              margin-right: 16px;
              border-right: 1px solid #fff;
            }

            &-title {
              font-weight: bold;
            }

            &-desc {
              opacity: 0.8;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
