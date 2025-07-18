---
title: vue-Prop-use
date: '2025-07-18'
category: 未分类
tags: []
---

# Vue Prop 的使用

## 父子组件通信
- **父组件向子组件传值**：使用 `prop`，`prop` 在子组件中像 `data` 数据一样使用。子组件通过 `props` 选项接收。
- **子组件与父组件通信**：子组件通过绑定事件（事件函数在父组件定义）和 `this.$emit('事件名')` 触发事件。
- **单向下行绑定**：`prop` 形成单向下行绑定，父组件更新会流向子组件，子组件内不应改变 `prop`。

## Prop 传值方式
- **静态 Props**：父组件直接写 `<v-child info="message"></v-child>`，子组件 `props: ['info']` 接收，子组件模板中可直接使用 `{{info}}`。
- **动态 Props**：父组件使用 `v-bind` 绑定数据，如 `<v-child :info="message"></v-child>`，父组件数据变化会传导给子组件。

## Prop 形式
- **数组形式**：
  ```javascript
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
  ```
  简单列出 `prop` 名。
- **对象形式**：
  ```javascript
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise
  }
  ```
  指定 `prop` 名和类型，便于检验。

## Prop 校验
- 可为 `prop` 值提供验证对象，例如：
  ```javascript
  propC: {
    type: String,
    required: true,
    default: '',
    validator: function (value) {
      return ['success', 'warning', 'danger'].indexOf(value) !== -1
    }
  }
  ```
- 校验在组件实例创建前进行，`data`、`computed` 等属性在 `default` 或 `validator` 中不可用。
- `type` 可为原生构造函数或自定义构造函数。

## 非 Prop 特性与 `$attrs`
- **非 Prop 特性**：传给组件但未在 `props` 中定义的特性，可通过 `$attrs` 获取。
- **`$attrs`**：`$attrs` 中只有未注册的特性。
