<template>
  <img :src="sourceImage" :style="styleBaseImage" :class="classBaseImage" :alt="isIcon ? icon : image" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

export interface Props {
  icon?: string;
  image?: string;
  height?: string;
  width?: string;
  isIcon?: boolean;
  isImage?: boolean;
  isPng?: boolean;
  isSvg?: boolean;
  isJpg?: boolean;
  isCursor?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  icon: "default",
  image: "default",
  height: "100%",
  width: "100%",
  isIcon: false,
  isImage: false,
  isPng: false,
  isSvg: false,
  isJpg: false,
});

/**
 * @description Set the image source
 * 
 * @return {string}
 */
const sourceImage = computed(() => {
  if (props.isIcon) {
    if (props.isJpg) {
      return require(`@/modules/app/assets/icons/${props.icon}.svg`)
    } else if (props.isPng) {
      return require(`@/modules/app/assets/icons/${props.icon}.png`)
    } else {
      return require(`@/modules/app/assets/icons/${props.icon}.svg`)
    }
  } else if (props.isImage) {
    if (props.isJpg) {
      return require(`@/modules/assets/images/${props.image}.jpg`)
    } else if (props.isPng) {
      return require(`@/modules/assets/images/${props.image}.png`)
    } else {
      return require(`@/modules/assets/images/${props.image}.svg`)
    }
  }
})

/**
 * @description Define style for base image
 * 
 * @return {object}
 */
const styleBaseImage = computed(() => {
  return {
    height: props.height,
    width: props.width,
  }
})


/**
 * @description Define class for base image
 * 
 * @return {object}
 */
const classBaseImage = computed(() => {
  return {
    'cursor-pointer': props.isCursor,
  }
})
</script>