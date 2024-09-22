---
sider_text="弹窗 dialog"
---

# Dialog 弹窗

## 基本用法

<div>
    <s-button @click="isVisible = true">打开对话框</s-button>
    <s-dialog v-model="isVisible" title="这是个对话框">
        <template #body>
            <div>
                <div>
                    床前明月光，
                </div>
                <div>
                    疑是地上霜。
                </div>
                <div>
                    举头望明月，
                </div>
                <div>
                    低头思故乡。
                </div>
            </div>
        </template>
        <template #footer>
            <div >
                <s-button>取消</s-button>
                <s-button>确认</s-button>
            </div>
        </template>
    </s-dialog>
</div>

<script setup>
import { ref } from 'vue';
const isVisible = ref(false);
</script>

::: details Show Code

```vue
<template>
  <s-dialog v-model="isVisible">
    <template #header>
      <div>对话框Header</div>       
    </template>
    <template #body>
      <div>对话框内容</div>
    </template>
    <template #footer>
      <div>对话框Footer</div>
    </template>
  </s-dialog>
</template> 
```
:::