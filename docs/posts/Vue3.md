---
title: Vue3
date: '2025-07-18'
category: 框架
tags: []
---
# [vue3](https://blog.csdn.net/2302_76329106/article/details/139447910)

### 特点

1. ##### 性能

   - 打包大小减少41%
   - 初次渲染快51%，更新渲染快133%
   - 内存占用减少54%

2. ##### 源码

   - 使用Proxy 代替Object.defineProperty 实现双向数据绑定
   - 重写虚拟DOM的实现和Tree-Shaking
   - vue3 更好的支持typescript

3. ##### 新特性

   (1)  **composition API（组合式api）**

   - setup配置
   - ref和reactive
   - watch 和watchEffect
   - provide和inject

   (2) **提供了新的内置组件**

   - Fragment
   - Teleport
   - Suspense

   (3) **其他改变**

   - 新的生命周期钩子
   - 移除keyCode 作为v-on的修饰符

好的，以下是一篇关于 Vue 3 入门语法的详细教程，适合初学者快速上手 Vue 3。

---

# Vue 3 入门：基础语法与特性

Vue 3 是 Vue.js 框架的最新版本，它在性能、代码组织和可维护性方面进行了全面升级。如果你是 Vue 3 的初学者，这篇文章将帮助你快速掌握 Vue 3 的基础语法和核心特性。

## 一、Vue 3 的安装与项目创建

### 1. 安装 Vue CLI
Vue CLI 是一个命令行工具，用于快速创建和管理 Vue 项目。首先，确保你已经安装了 Node.js 和 npm。然后，通过以下命令安装 Vue CLI：

```bash
npm install -g @vue/cli
```

### 2. 创建 Vue 3 项目
使用 Vue CLI 创建一个 Vue 3 项目：

```bash
vue create my-vue3-project
```

在创建过程中，选择 Vue 3 作为项目的基础框架。完成后，进入项目目录并启动开发服务器：

```bash
cd my-vue3-project
npm run serve
```

你也可以使用以下命令快速创建一个 Vue 3 项目：

```bash
npm init vue@latest
```

## 二、Vue 3 的基础语法

### 1. 模板语法
Vue 3 的模板语法与 Vue 2 类似，但有一些改进。以下是一个简单的模板示例：

```vue
<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="changeMessage">点击我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3!'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Message changed!';
    }
  }
};
</script>
```

- `{{ message }}`：用于绑定数据。
- `@click`：用于绑定事件。

### 2. 数据绑定
Vue 3 提供了多种数据绑定方式，包括插值表达式、动态绑定和双向绑定。

#### 插值表达式
```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>
```

#### 动态绑定
```vue
<template>
  <div>
    <input :value="message" @input="message = $event.target.value" />
  </div>
</template>
```

#### 双向绑定
Vue 3 中仍然可以使用 `v-model` 实现双向绑定：

```vue
<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>
```

### 3. 条件渲染
Vue 3 提供了 `v-if`、`v-else-if` 和 `v-else` 指令来实现条件渲染。

```vue
<template>
  <div>
    <p v-if="isVisible">This is visible</p>
    <p v-else>This is hidden</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    };
  }
};
</script>
```

### 4. 列表渲染
使用 `v-for` 指令可以实现列表渲染：

```vue
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Apple', 'Banana', 'Cherry']
    };
  }
};
</script>
```

### 5. 样式绑定
Vue 3 提供了 `v-bind:class` 和 `v-bind:style` 指令来动态绑定样式。

#### 绑定类名
```vue
<template>
  <div :class="{ active: isActive, 'text-danger': hasError }">
    Hello, Vue 3!
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false
    };
  }
};
</script>
```

#### 绑定内联样式
```vue
<template>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    Hello, Vue 3!
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: 'red',
      fontSize: 30
    };
  }
};
</script>
```

## 三、Composition API
Vue 3 引入了 Composition API，这是一种新的代码组织方式，允许开发者以组合式的方式组织代码，提升了代码的可维护性和复用性。

### 1. setup 函数
`setup` 是 Composition API 的入口函数，它在组件创建之前执行，用于定义组件的逻辑。

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="increment">点击我</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');
    const increment = () => {
      message.value += '!';
    };
    return {
      message,
      increment
    };
  }
};
</script>
```

### 2. ref 和 reactive
`ref` 和 `reactive` 是 Composition API 中用于定义响应式数据的两个核心函数。

- `ref`：用于定义基本数据类型的响应式数据。
- `reactive`：用于定义对象类型的响应式数据。

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">点击我</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    return {
      count,
      increment
    };
  }
};
</script>
```

### 3. watch 和 watchEffect
`watch` 和 `watchEffect` 用于监听响应式数据的变化。

- `watch`：允许你监听一个或多个响应式数据，并在数据变化时执行回调函数。
- `watchEffect`：自动监听响应式数据的变化，并在数据变化时执行回调函数。

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">点击我</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++;
    };

    watchEffect(() => {
      console.log(`count changed to ${count.value}`);
    });

    return {
      count,
      increment
    };
  }
};
</script>
```

### 4. provide 和 inject
`provide` 和 `inject` 用于父子组件之间的依赖注入。

```vue
// 父组件
<template>
  <div>
    <child-component />
  </div>
</template>

<script>
import { provide, ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  setup() {
    const message = ref('Hello from parent!');
    provide('message', message);
  }
};
</script>
```

```vue
// 子组件
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return {
      message
    };
  }
};
</script>
```

## 四、生命周期钩子
Vue 3 的生命周期钩子与 Vue 2 类似，但有一些变化。以下是常用的生命周期钩子：

- `onBeforeMount`
- `onMounted`
- `onBeforeUpdate`
- `onUpdated`
- `onBeforeUnmount`
- `onUnmounted`

```vue
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');

    onMounted(() => {
      console.log('Component mounted');
    });

    onUnmounted(() => {
      console.log('Component unmounted');
    });

    return {
      message
    };
  }
};
</script>
```

## 五、总结
Vue 3 在语法和特性上进行了全面升级，提供了更好的性能、更灵活的代码组织方式和更强大的功能。通过本文的介绍，你已经掌握了 Vue 3 的基础语法和核心特性。希望你在未来的项目中能够熟练运用 Vue 3，开发出高性能、可维护的前端应用。

---