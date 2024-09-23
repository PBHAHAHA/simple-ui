<template>
  <component
    :is="IconComponent"
    :size="size"
    :color="color"
    :spin="spin"
    strokeLinecap="square"
    class="icon-style"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import * as IconPark from '@icon-park/vue-next'

defineOptions({
  name: 'SIcon'
})

// 定义组件的props
const props = defineProps({
  // 图标名称，必填
  name: {
    type: String,
    required: true
  },
  // 图标大小，默认16
  size: {
    type: [Number, String],
    default: 16
  },
  // 图标颜色，默认#333
  color: {
    type: String,
    default: '#333'
  },
  // 是否旋转，默认false
  spin: {
    type: Boolean,
    default: false
  }
})

// 根据传入的name动态计算出对应的IconPark组件
const IconComponent = computed(() => {
  return (IconPark as any)[props.name]
})

// 使用方法：
// <SIcon name="Home" size="24" color="#666" :spin="true" />
</script>
