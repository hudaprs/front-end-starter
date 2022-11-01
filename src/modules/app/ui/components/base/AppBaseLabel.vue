<template>
  <label :style="labelStyle"> {{ props.title }} </label>
</template>

<script setup lang="ts">
import { computed, type CSSProperties, type StyleValue } from 'vue'

export interface Props {
  title: string;
  size?: number | string;
  isBold?: boolean;
  color?: string;
  fontWeight?: number;
  italic?: boolean;
  underline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 13,
  isBold: true,
  color: 'black',
})

const labelStyle = computed<CSSProperties>(() => ({
  fontSize: `${props.size}px`,
  color: props.color,
  fontWeight: props.fontWeight ? props.fontWeight : props.isBold ? 'bold' : 'normal',
  fontStyle: props.italic ? 'italic' : 'normal',
  textDecoration: props.underline ? 'underline' : undefined,
}))
</script>