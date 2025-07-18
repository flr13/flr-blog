---
title: vue通信方式
date: '2025-07-18'
category: Vue
tags: []
---
# vue通信方式

1. 父组件向子组件传值（props）
2. 子组件向父组件传值（$emit）
3. 兄弟组件之间传值（eventBus）
4. 父组件操作子组件的实例（ref）
5. $parent 和 $children
6. 跨层级通信provide/inject
7. $attrs 和 $listeners
8. localStorage/sessionStorage
9. Vuex
10. v-model
11. .sync 修饰符
12. 通过 $root 访问根实例
13. slot

## 1.props / $emit

父组件通过`props`的方式向子组件传递数据，而通过`$emit` 子组件可以向父组件通信。

## 2.v-model 指令

v-model 是用来在表单控件或者组件上创建双向绑定的，他的本质是 v-bind 和 v-on 的语法糖，**在一个组件上使用 v-model，默认会为组件绑定名为 value 的 prop 和名为 input 的事件。**

 默认为父组件绑定名为 `:value="inputValue"`的属性，和`@input="(v) => { this.inputValue = v }"`事件，子组件通过 `this.$emit('input', value)` 通知父组件 

## 3. .sync 修饰符

- `.sync` 修饰符在 vue 1.x 的版本中就已经提供，1.x 版本中，当子组件改变了一个带有 `.sync` 的 `prop` 的值时，会将这个值同步到父组件中的值。这样使用起来十分方便，但问题也十分明显，这样破坏了单向数据流，当应用复杂时，debug 的成本会非常高。
- 于是乎，在vue 2.0中移除了 `.sync`。但是在实际的应用中，`.sync` 是有它的应用场景的，所以在 `vue 2.3` 版本中，又迎来了`全新的 .sync`。
- 新的 `.sync` 修饰符所实现的已经不再是真正的双向绑定，它的本质和 `v-model` 类似，只是一种缩写。

```js
//父组件
<text-document v-bind:title.sync="doc.title" />
```

```js
//子组件
this.$emit('update:title', newTitle)
```

## 4.parent/parent / $parent/$children

 通过`$parent`和`$children`就可以访问组件的实例，拿到实例代表什么？代表可以访问此组件的`所有方法`和`data` 

## 5.provide / inject

 `provide / inject` 是vue2.2.0新增的api, 简单来说就是父组件中通过`provide来提供变量`, 然后再子组件中通过`inject来注入变量`。 

provide 选项应该是

一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。
inject 选项应该是：

一个字符串数组
一个对象(详情点击这里)

```js
// 祖先组件 提供foo
//第一种
export default {
  name: "father",
  provide() {
    return {
      foo: 'hello'
    }
  },
}
//第二种
export default {
  name: "father",
  provide: {
    foo:'hello~~~~'
  },
}

//后代组件 注入foo, 直接当做this.foo来用
export default {
  inject:['foo'],
}
```

## 6.ref / $refs

 `ref`：如果在普通的 DOM 元素上使用，引用指向的就是 `DOM 元素`；如果用在`子组件`上，引用就指向`组件实例`，可以通过实例直接调用组件的方法或访问数据， 我们看一个ref 来访问组件的例子: 

```js
父组件
<template>
    //子组件加上ref属性
  <strategy-index
    :strategy-type="2"
    ref="strategyIndex"
  />
</template>
export default {
  methods: {
//直接调用子组件的方法
getChildMethods(){
 this.$refs.strategyIndex.onclick()
}
}
子组件
<template>
  <div>
  <button @click='onclick()'>
      
    </button>
  </div>
</template>
export default {
  methods: {
onclick(){
 console.log('我是子组件的方法')
}
}
}
</script>

```



## 7.eventBus

 `eventBus`，其实原理就是 事件订阅发布，`eventBus` 又称为事件总线，在vue中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件 

```js
Vue.prototype.$bus = new Vue(); // 设置 挂载至 vue 的原型上
子组件1
// 调用 兄弟组件 方法
handleFetchHomeFunction(){
   this.$bus.$emit('valueUpdate', this.value) //使用$emit('xxx')
  }
 // 接收 事件
this.$bus.$on('valueUpdate', (value)=>{
this.value = value;
})

```



## 8.Vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化.

Vuex 解决了多个视图依赖于同一状态和来自不同视图的行为需要变更同一状态的问题，将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上

## 9.localStorage / sessionStorage

这种通信比较简单,缺点是数据和状态比较混乱,不太容易维护。

通过window.localStorage.getItem(key)获取数据
通过window.localStorage.setItem(key,value)存储数据通过 $root 访问根实例

## 10.通过 $root 访问根实例

通过 `$root`，任何组件都可以获取当前`组件树的根 Vue 实例`，通过维护根实例上的 data，就可以实现组件间的`数据共享`。

## 11.`$attrs`与 `$listeners`

$attrs：包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。当一个组件没有声明任何 props 时，它包含所有父作用域的绑定 (class 和 style 除外)。

$listeners：包含了父作用域中的 (不含 .native 修饰符) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件。它是一个对象，里面包含了作用在这个组件上的所有事件监听器，相当于子组件继承了父组件的事件。


