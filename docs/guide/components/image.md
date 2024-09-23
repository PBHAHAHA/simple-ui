---
sider_text="图片 Image"
---

# Image 图片

Image 组件用于在页面中展示图片，支持懒加载、加载失败时的替代显示等功能。

## 基本用法

基础的图片用法。

<div>
  <s-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="示例图片" width="80px" height="80px" previewable />
</div>

::: details 代码

:::
## 设置fit

通过 `fit` 属性可以设置图片在容器中的适应方式。

<div style="display: flex; gap: 20px;">
  <div v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']" :key="fit">
    <p>{{ fit }}</p>
    <s-image
      style="border: 1px solid #ccc;padding: 10px;"
      width="100px"
      height="100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      :fit="fit"
    />
  </div>
</div>

::: details 代码
```VUE
<div v-for="fit in ['fill', 'contain', 'cover', 'none', 'scale-down']" :key="fit">
    <p>{{ fit }}</p>
    <s-image
      style="border: 1px solid #ccc;padding: 10px;"
      width="100px"
      height="100px"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      :fit="fit"
    />
  </div>
```
:::



