---
sider_text="按钮 button"
---

:::

# Button 按钮

## 基本用法

<div class="flex group">
  <s-button>Default</s-button>
  <s-button type="primary">Primary</s-button>
  <s-button loading>Loading</s-button>
  <s-button disabled>Disabled</s-button>
  <s-button hoverStyle="hov2">hover2</s-button>
  <s-button type="primary" hoverStyle="hov2">hover2</s-button>
</div>

::: details Show Code

```vue
<template>
  <div class="flex group">
    <s-button>Default</s-button>
    <s-button type="primary">plain</s-button>
    <s-button loading>Loading</s-button>
    <s-button disabled>Disabled</s-button>
    <s-button @click="handleClick">点击事件</s-button>
    <s-button hoverStyle="hov2">hover2</s-button>
  </div>
</template>
```

:::
