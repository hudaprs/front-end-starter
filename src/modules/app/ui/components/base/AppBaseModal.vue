<template>
  <div class="app-base-modal">
    <a-modal :visible="isModalVisible" :width="`${modalWidth}px`">
      <!-- Modal Header -->
      <template #title v-if="isUsingTitle">
        <div class="modal-title">
          <h1
            class="text-2xl font-weight-bold"
            :class="isTitleCentered ? 'text-center' : 'text-left'"
          >
            {{ modalTitle }}
          </h1>
          <h2
            class="text-xl font-weight-normal"
            :class="isTitleCentered ? 'text-center' : 'text-left'"
            v-if="isUsingSubtitle"
          >
            {{ modalSubtitle }}
          </h2>
        </div>
      </template>

      <!-- Close Action -->
      <template #closeIcon v-if="isUsingCloseIcon">
        <close-outlined @click="handleCloseModal" />
      </template>

      <!-- Modal Content -->
      <slot />

      <!-- Modal Footer -->
      <template #footer v-if="isUsingButton">
        <div class="btn-actions">
          <a-button
            key="back"
            class="text-black"
            @click="handleSecondButtonAction"
            :loading="isSecondButtonLoading"
            v-if="isUsingSecondButton"
            >{{ secondButtonText }}</a-button
          >
          <a-button
            key="submit"
            type="primary"
            class="text-black"
            :loading="isFirstButtonLoading"
            @click="handleFirstButtonAction"
            >{{ firstButtonText }}</a-button
          >
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { CloseOutlined } from "@ant-design/icons-vue";

// Define Props
export interface Props {
  modalTitle: string;
  modalSubtitle?: string;
  modalWidth?: string;
  isModalVisible: boolean;
  isUsingTitle?: boolean;
  isTitleCentered?: boolean;
  isUsingSubtitle?: boolean;
  isUsingButton: boolean;
  isUsingCloseIcon?: boolean;
  isUsingSecondButton?: boolean;
  firstButtonText?: string;
  secondButtonText?: string;
  isFirstButtonLoading?: boolean;
  isSecondButtonLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modalTitle: "Modal Title",
  modalSubtitle: "Modal Subtitle",
  modalWidth: "489",
  isModalVisible: false,
  isUsingTitle: true,
  isUsingSubtitle: false,
  isTitleCentered: false,
  isUsingButton: true,
  isUsingCloseIcon: true,
  isUsingSecondButton: false,
  firstButtonText: "First Button",
  secondButtonText: "Second Button",
  isFirstButtonLoading: false,
  isSecondButtonLoading: false,
});

// Define Emits
const emit = defineEmits([
  "actionSecondButton",
  "actionFirstButton",
  "closeModal",
]);

/**
 * @description Handle Action First Button
 *
 * @return {Event}
 */
const handleFirstButtonAction = () => {
  emit("actionFirstButton");
};

/**
 * @description Handle Action Second Button
 *
 * @return {Event}
 */
const handleSecondButtonAction = () => {
  emit("actionSecondButton");
};

/**
 * @description Handle Close Modal
 *
 * @return {Event}
 */
const handleCloseModal = () => {
  emit("closeModal");
};
</script>
