<template>
  <div v-if="modelValue" class="dialog-overlay" @click="closeDialog">
    <div class="dialog-content" @click.stop>
      <div class="dialog-header">
        <slot name="header">
          <div>{{ title }}</div>
        </slot>
        <s-icon class="dialog-close-button" @click="closeDialog" name="Close" size="18" />
      </div>
      <div class="dialog-body">
        <slot name="body"></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';


defineOptions({
  name: 'SDialog'
});

const props = defineProps<{
  modelValue: boolean;
  title: string;
}>();

const emit = defineEmits(['update:modelValue']);

const closeDialog = () => {
  emit('update:modelValue', false);
};

watch(() => props.modelValue, (newVal) => {
  if (!newVal) {
    closeDialog();
  }
});
</script>
<style scoped></style>