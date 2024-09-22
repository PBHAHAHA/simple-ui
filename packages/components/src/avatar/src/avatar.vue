<template>
  <div class="avatar" :style="{ width: width + 'px', height: height + 'px' }">
    <img v-if="imageUrl" :src="imageUrl" alt="Avatar" @error="handleError" />
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";

defineOptions({
  name: "SAvatar",
});

const props = defineProps<{
  src: string;
  width?: number;
  height?: number;
}>();

const imageUrl = ref(props.src);
const width = props.width ?? 40;
const height = props.height ?? 40;

const handleError = () => {
  imageUrl.value = "";
};
</script>

<style scoped>

</style>
