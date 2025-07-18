---
title: vuex 状态管理
date: '2025-07-18'
category: 框架
tags: []
---
# vuex 状态管理

 vuex中一共有五个状态 State Getter Mutation  Action  Module  

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200714140121359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTAzNTgxNjg=,size_16,color_FFFFFF,t_70) 

## State

> 提供唯一的公共数据源，所有共享的数据统一放到store的state进行储存，相似与data

```js

import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  //数据，相当于data
 state: {
    
  },
  getters: {
    
  },
  //里面定义方法，操作state方法
  mutations: {
    
  },
  // 操作异步操作mutation
  actions: {
    
  },
  modules: {
    
  },
})
```

##### 如何使用：

 在vuex中state中定义数据，可以在任何组件中进行调用 

1. 在标签中使用  {{ $store.state.全局数据名称 }}

2.  获取数据 ： this.$store.state.全局数据名称

3. 从vuex中按需导入mapstate函数

   ```javascript
   import { mapState } from "vuex";
   ```

##  Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数, 其中参数state参数是必须的，也可以自己传递一个参数 .

定义一些方法。 

##### 如何使用

使用commit触发Mutation操作  

```js
this.$store.commit(mathodName)  // mathodName 是 mutation 定义的方法
```

## Action ——进行异步操作

> Action和Mutation相似，Mutation 不能进行异步操作，若要进行异步操作，就得使用Action

**在组件中使用：**

方法一：

直接使用 dispath触发Action函数

```kotlin
this.$store.dispath("reduce")
```

方法二：使用辅助函数

## Getter

> 类似于vue中的computed，进行缓存，对于Store中的数据进行加工处理形成新的数据

## Modules

当遇见大型项目时，数据量大，store就会显得很臃肿

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

