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

### 具名插槽

1. 默认模板 

   ```vue
   BaseLayout.vue
   <div class="container">
     <header>
       <!-- 标题内容放这里 -->
     </header>
     <main>
       <!-- 主要内容放这里 -->
     </main>
     <footer>
       <!-- 底部内容放这里 -->
     </footer>
   </div>
   ```

2. 使用solt

   (1) 子组件引入solt

   ```vue
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
   ```

   （2） 父组件使用组件

   ```vue
   //方式1
   <BaseLayout>
     <template v-slot:header>
       <!-- header 插槽的内容放这里 -->
     </template>
   </BaseLayout>
   // 使用简写方式
   <BaseLayout>
     <template #header>
       <h1>Here might be a page title</h1>
     </template>
   
     <template #default>
       <p>A paragraph for the main content.</p>
       <p>And another one.</p>
     </template>
   
     <template #footer>
       <p>Here's some contact info</p>
     </template>
   </BaseLayout>
   ```

     `v-slot` 有对应的简写 `#`，因此 ` 可以简写为 `。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。 

   ### 作用域插槽

   1. 使用场景

       然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。 

   2. 用法

      （1）子组件

      ```vue
      <!-- <MyComponent> 的模板 -->
      <div>
        <slot :text="greetingMessage" :count="1"></slot>
      </div>
      ```

        (2)    父组件

```

```

