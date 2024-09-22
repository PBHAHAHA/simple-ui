<template>
  <div v-if="modelValue" class="dialog-overlay" @click="closeDialog">
    <div class="dialog-content" @click.stop>
      <div class="dialog-header">
        <slot name="header">
          <div>{{ title }}</div>
        </slot>
        <button @click="closeDialog" class="dialog-close-button">X</button>
      </div>
      <div class="dialog-body">
        <slot name="body">
          这是一个对话框
        </slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer">
          <button @click="closeDialog" class="dialog-confirm-button">确认</button>
        </slot>
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
<style scoped>

</style>