<template>
  <a-form :model="form" name="basic" layout="vertical" autocomplete="off" @finish="onFinish">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="To do" name="todo" :rules="[{ required: true }]">
          <a-input v-model:value="form.todo" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="User Id" name="userId" :rules="[{ required: true }]">
          <a-input v-model:value="form.userId" />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item>
          <a-checkbox v-model:checked="form.completed">{{ t('notes.completed') }}</a-checkbox>
        </a-form-item>
      </a-col>
    </a-row>
    <a-space>
      <a-button type="primary" html-type="submit" :loading="notes_loading">
        {{ t('common.save') }}
      </a-button>
      <a-button type="link" @click="onRedirectToNotes" :disabled="notes_loading">
        {{ t('common.back') }}
      </a-button>
    </a-space>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { notification } from 'ant-design-vue';

import type { INoteItem } from '@/modules/notes/model/notes.model';
import { useNotes } from '@/modules/notes/composable/useNotes';

const { t } = useI18n();
const router = useRouter();
const { notes_loading, notes_createNotes } = useNotes();

const onRedirectToNotes = () => {
  router.back();
};

const form = reactive<Partial<INoteItem>>({
  todo: '',
  userId: '',
  completed: false,
});

const clearForm = () => {
  form.todo = '';
  form.userId = '';
  form.completed = false;
};

const onFinish = async () => {
  try {
    await notes_createNotes(form);
    notification.success({ message: t('notes.alert_message.success_create') });
    clearForm();
  } catch (_) {
    //
  }
};
</script>

<style lang="scss" scoped></style>
