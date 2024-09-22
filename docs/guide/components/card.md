---
sider_text="卡片 card"
---



# Card 卡片

## 基本用法

<div>
    <s-card theme="black">
        <template #header>
            <div>卡片Header</div>
        </template>
        <template #content>
            <div>卡片内容</div>
        </template>
        <template #footer>
            <div style="text-align: right;">
                <s-button>确认</s-button>
            </div>
        </template>
    </s-card>
</div>

::: details Code

```vue
<template>
    <s-card theme="black">
        <template #header>
            <div>卡片Header</div>
        </template>
        <template #content>
            <div>卡片内容</div>
        </template>
        <template #footer>
            <div style="text-align: right;">
                <s-button>确认</s-button>
            </div>
        </template>
    </s-card>
</template>
```
:::
