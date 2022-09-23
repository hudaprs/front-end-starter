<template>
  <div class="base-title">
    <h1 :class="{ 'space-to-bottom': !props.subtitle }">{{ props.title }}</h1>
    <h4
      class="space-to-bottom"
      :style="{ 'font-style': props.subtitleItalic ? 'italic' : 'normal' }"
    >
      {{ props.subtitle }}
    </h4>
  </div>
</template>

<script lang="ts" setup>
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-props

export interface Props {
  title: string;
  subtitle?: string;
  subtitleItalic?: boolean;
  marginBottom?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Default Title", // It's not useful ? delete it
  marginBottom: "16px",
  subtitleItalic: false,
});
</script>

<style lang="scss" scoped>
.base-title {
  .space-to-bottom {
    margin-bottom: v-bind(marginBottom);
  }

  h1,
  h4 {
    margin-bottom: 0;
  }

  h4 {
    font-weight: 500;
  }
}
</style>
