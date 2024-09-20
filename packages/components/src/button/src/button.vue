<template>
  <button
    class="s-button"
    :class="classList"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="s-button__loading-icon"></span>
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'SButton'
})

interface Props {
  size?: 'small' | 'medium' | 'large';
  type?: 'default' | 'primary';
  disabled?: boolean;
  text?: string;
  loading?: boolean;
  hoverStyle?: 'hov1' | 'hov2';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  type: 'default',
  disabled: false,
  text: '',
  loading: false,
  hoverStyle: 'hov1'
})

const emit = defineEmits(['click'])

const classList = computed(() => {
  return {
    [`s-button--${props.size}`]: props.size,
    [`s-button--${props.type}`]: props.type,
    's-button--disabled': props.disabled,
    's-button--loading': props.loading,
    [`s-button--hover-${props.hoverStyle}`]: props.hoverStyle
  }
})

const handleClick = (event: MouseEvent) => {
  if (!props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped lang="scss">
</style>