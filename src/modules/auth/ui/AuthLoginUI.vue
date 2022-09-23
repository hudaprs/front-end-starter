<template>
  <div>
    <AppBaseTitle
      title="AuthLoginUI.vue"
      subtitle="src/modules/auth/ui/AuthLoginUI.vue"
      subtitleItalic
    />
    <a-form
      :model="form"
      name="basic"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        :label="t('auth.username')"
        name="username"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="form.username" />
      </a-form-item>

      <a-form-item
        :label="t('auth.password')"
        name="password"
        :rules="[{ required: true }]"
      >
        <a-input-password v-model:value="form.password" />
      </a-form-item>

      <a-space>
        <a-button type="primary" html-type="submit" :loading="auth_loading">
          {{ $t("auth.login") }}
        </a-button>
        <a-button type="link" @click="changeLang">
          {{ $t("auth.change_lang") }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import type { IAuthForm } from "../model/auth.model";
import { useAuthStore } from "../store/auth.store";

const authStore = useAuthStore();
const store = storeToRefs(authStore);
const { auth_loading, auth_isAuthenticated } = store;

const router = useRouter();
const onRedirectToDashboard = () => {
  router.replace({ name: "dashboard" });
};

const form = reactive<IAuthForm>({
  username: null,
  password: null,
});

const onFinish = async (payload: IAuthForm) => {
  await authStore.auth_doLogin(payload);
  onRedirectToDashboard();
};

const { t, locale } = useI18n();
const changeLang = () => {
  locale.value = locale.value == "en" ? "id" : "en";
};

onMounted(() => {
  if (auth_isAuthenticated) onRedirectToDashboard();
});
</script>

<style lang="scss" scoped></style>
