---
title: solt-use
date: '2025-07-18'
category: ui-组件
tags: []
---
# solt插槽

### 什么是[solt](https://cn.vuejs.org/guide/components/slots.html#named-slots)

[教程]: http://t.csdnimg.cn/qWmLt

[vue 动态插槽与插槽循环的用法](http://t.csdnimg.cn/qWmLt)

` <slot> `  元素是一个**插槽出口** (slot outlet)，标示了父元素提供的**插槽内容** (slot content) 将在哪里被渲染。 
# Vue 中的 `slot` 插槽使用指南

## 1. 什么是 `slot`

在 Vue 中，`slot` 是一个插槽出口（slot outlet），用于标示父组件提供的插槽内容（slot content）将在子组件的何处被渲染。它允许父组件向子组件动态插入内容，增强了组件的灵活性和可复用性。

## 2. 基础用法

### 2.1 默认插槽

默认插槽是最简单的插槽类型，它不需要指定插槽名称。

#### 子组件

```vue
<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
```

#### 父组件

```vue
<template>
  <BaseLayout>
    <p>这是默认插槽的内容</p>
  </BaseLayout>
</template>
```

### 2.2 具名插槽

具名插槽允许父组件在子组件的多个位置插入内容。

#### 子组件

```vue
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

#### 父组件

```vue
<template>
  <BaseLayout>
    <template v-slot:header>
      <h1>这是头部内容</h1>
    </template>

    <template #default>
      <p>这是主要内容</p>
    </template>

    <template #footer>
      <p>这是底部内容</p>
    </template>
  </BaseLayout>
</template>
```

### 2.3 简写方式

Vue 2.6+ 支持 `v-slot` 的简写方式 `#`，例如：

```vue
<BaseLayout>
  <template #header>
    <h1>这是头部内容</h1>
  </template>
</BaseLayout>
```

## 3. 作用域插槽

作用域插槽允许子组件向父组件传递数据，父组件可以在插槽中使用这些数据。

### 3.1 子组件

```vue
<template>
  <div>
    <slot :text="greetingMessage" :count="1"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greetingMessage: "Hello, Vue!"
    };
  }
};
</script>
```

### 3.2 父组件

```vue
<template>
  <MyComponent>
    <template v-slot:default="slotProps">
      <p>{{ slotProps.text }} - {{ slotProps.count }}</p>
    </template>
  </MyComponent>
</template>
```

## 4. 使用场景

- **动态内容插入**：父组件可以根据需要动态插入子组件的内容。
- **布局复用**：通过插槽，可以复用同一个布局组件，而内容则由父组件提供。
- **数据共享**：作用域插槽允许子组件将数据传递给父组件，父组件可以在插槽中使用这些数据。

## 5. 注意事项

- **默认插槽与具名插槽的区别**：默认插槽不需要指定名称，而具名插槽需要通过 `name` 属性指定。
- **作用域插槽的数据传递**：子组件通过 `slot` 的绑定属性传递数据，父组件通过 `v-slot` 的值接收数据。
- **插槽的优先级**：如果同时使用了默认插槽和具名插槽，具名插槽的优先级更高。

## 6. 总结

`slot` 插槽是 Vue 中实现组件内容动态插入和数据共享的重要机制。通过合理使用默认插槽、具名插槽和作用域插槽，可以构建更加灵活和可复用的组件。
