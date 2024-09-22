<script setup lang="ts">
import { defineProps, defineSlots } from 'vue';

defineOptions({
  name: 'SCard'
});

const props = defineProps<{
  header?: string;
  content?: string;
  footer?: string;
  customClass?: string;
}>();

const slots = defineSlots();
</script>
  
<template>
  <div :class="['card', props.customClass]">
    <div class="card-header" v-if="slots.header">
      <slot name="header">{{ props.header }}</slot>
    </div>
    <div class="card-content" v-if="props.content || slots.content">
      <slot name="content">{{ props.content }}</slot>
    </div>
    <div class="card-footer" v-if="slots.footer">
      <slot name="footer">{{ props.footer }}</slot>
    </div>
  </div>
</template>
