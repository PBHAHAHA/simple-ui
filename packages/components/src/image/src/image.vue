<template>
  <div class="s-image">
    <!-- 图片元素，当没有错误时显示 -->
    <img
      v-if="!isError"
      ref="imgRef"
      :src="lazy ? '' : src"
      :alt="alt"
      :style="imgStyle"
      @load="handleLoad"
      @error="handleError"
      @click="handlePreview"
    />
    <!-- 加载中的占位符 -->
    <div v-if="isLoading" class="s-image__placeholder">
      <slot name="placeholder">
        <span>加载中...</span>
      </slot>
    </div>
    <!-- 加载错误时的显示内容 -->
    <div v-if="isError" class="s-image__error">
      <slot name="error">
        <img :src="fallback" :alt="alt" :style="imgStyle" v-if="fallback" />
        <span v-else>加载失败</span>
      </slot>
    </div>
    <!-- 图片预览遮罩层 -->
    <div v-if="showPreview" class="s-image__preview" @click.self="closePreview" @keyup.esc="closePreview" tabindex="0">
      <div class="s-image__preview-content" @wheel.prevent="handleZoom">
        <img
          :src="src"
          :alt="alt"
          :style="previewStyle"
        />
      </div>
      <div class="s-image__preview-toolbar" @click.stop>
        <button @click="zoomIn" class="s-image__preview-button">
          <s-icon name="ZoomIn" size="20" />
        </button>
        <button @click="zoomOut" class="s-image__preview-button">
          <s-icon name="ZoomOut" size="20" />
        </button>
        <button @click="rotateLeft" class="s-image__preview-button">
          <s-icon name="Rotate" size="20" />
        </button>
        <button @click="rotateRight" class="s-image__preview-button">
          <s-icon name="Rotate" size="20" style="transform: scaleX(-1);"/>
        </button>
        <button @click="closePreview" class="s-image__preview-button">
          <s-icon name="Close" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { SIcon } from '../../icon';

// 定义组件名称
defineOptions({
  name: 'SImage'
})

// 定义组件的props
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  height: {
    type: [Number, String],
    default: 'auto'
  },
  fit: {
    type: String,
    default: 'fill'
  },
  lazy: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: String,
    default: ''
  },
  previewable: {
    type: Boolean,
    default: false
  }
});

// 定义响应式变量
const isLoading = ref(true);
const isError = ref(false);
const imgRef = ref<HTMLImageElement | null>(null);
const showPreview = ref(false);
const scale = ref(1);
const rotation = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0);
const translateX = ref(0);
const translateY = ref(0);

// 计算图片样式
const imgStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  objectFit: props.fit as 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}));

// 计算预览图片样式
const previewStyle = computed(() => ({
  transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value}) rotate(${rotation.value}deg)`,
  transition: isDragging.value ? 'none' : 'transform 0.3s'
}));

// 图片加载成功的处理函数
const handleLoad = () => {
  isLoading.value = false;
};

// 图片加载失败的处理函数
const handleError = () => {
  isLoading.value = false;
  isError.value = true;
};

// 处理图片预览
const handlePreview = () => {
  if (props.previewable && !isError.value) {
    showPreview.value = true;
  }
};

// 关闭图片预览
const closePreview = () => {
  showPreview.value = false;
  resetPreview();
};

// 重置预览状态
const resetPreview = () => {
  scale.value = 1;
  rotation.value = 0;
  translateX.value = 0;
  translateY.value = 0;
};

// 处理缩放
const handleZoom = (e: WheelEvent) => {
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  scale.value = Math.max(0.1, Math.min(scale.value + delta, 3));
};

// 放大
const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.1, 3);
};

// 缩小
const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.1, 0.1);
};

// 向左旋转
const rotateLeft = () => {
  rotation.value -= 90;
};

// 向右旋转
const rotateRight = () => {
  rotation.value += 90;
};


// Intersection Observer 回调函数
const observerCallback = (entries: IntersectionObserverEntry[]) => {
  if (entries[0].isIntersecting) {
    imgRef.value!.src = props.src;
    observer?.disconnect();
  }
};

// 创建 Intersection Observer 实例
let observer: IntersectionObserver | null = null;

if (props.lazy) {
  observer = new IntersectionObserver(observerCallback);
}

// 初始化懒加载
const initLazyLoad = () => {
  if (props.lazy && imgRef.value) {
    observer?.observe(imgRef.value);
  }
};

// 处理ESC键退出预览
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showPreview.value) {
    closePreview();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>
