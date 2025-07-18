---
title: vue-Prop-use
date: '2025-07-18'
category: 未分类
tags: []
---
# vue的Prop用法

#### 简单的父子组件的传值

1.   父组件向子组件传值使用[prop](https://vuejs.bootcss.com/guide/components-props.html),  prop中传的的指便成为组件实例的一个属性；
2. 在子组件中使用props选项把这些特性包括起来，在子组件中可以像使用data中数据一样使用；
3. 使用**事件触发的方式**，让**子组件和父组件通信**。在子组件上绑定事件（事件函数在父组件中定义），子组件中可以通过`this.$emit('事件名')`的方式触发父组件在子组件上绑定的事件。

**说明：** 

- prop 是在父传子时形成一个单向下行绑定，即形成**单向数据流**。意思是父级的更新会向下流动到子组件中，但是反过来则不行。
- 每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。

### prop传值

使用prop传递数据有动态和静态两种方式。

##### 静态props

```vue
//父组件
<template>
  <div id="app">
    <v-child info="message"></v-child>
  </div>
</template>
<script>
import Child from './components/Child'
export default {
  components:{
    'v-child':Child
  },
  data(){
    return{
      message:''
    }
  }
}
</script>
```

```vue
//子组件
<template>
  <div>{{info}}</div>
</template>
<script>
export default {
  props:['info']
}
</script>
```

##### 动态props

使用v-bind来绑定要传的数据，每当父组件的数据变化时，该变化也会传导给子组件。 

```vue
<template>
  <div id="app">
    <div>父级:<input type="text" v-model="message"></div>
    <v-child info="message"></v-child>
  </div>
</template>
<script>
import Child from './components/Child'
export default {
  components:{
    'v-child':Child
  },
  data(){
    return{
      message:''
    }
  }
}
</script>
```

```vue
<template>
  <div>{{info}}</div>
</template>
<script>
export default {
  props:['info']
}
</script>
```

### prop类型

prop有两种形式：数组和对象

```js
//以字符串数组的形式
props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```

```js
//以对象的形式，值：类型的形式，便于检验
`props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // or any other constructor
}`
```

### prop校验

 为了定制 prop 的验证方式，你可以为 `props` 中的值提供一个带有验证需求的对象，而不是一个字符串数组 .

>

```js
​```propC: {
      type: String,
      required: true,
     //默认值
      default:       ,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }```
```

>

那些`prop`会在一个组件实例创建**之前**进行验证，所以实例的属性 (如 `data`、`computed`等)在`default`或`validator`函数中是不可用的。

`type` 可以是下列原生构造函数中的一个:`String`,`Number`,`Boolean`,`Array`,`Object`,`Date`,`Function`,`Symbol`

`type` 还可以是一个自定义的构造函数

### 非Prop特性与$attrs

一个**非 prop 特性**是指传向一个组件，但是该组件并没有相应 prop 定义的特性（组件的props中并没有绑定传来的特性）。

非Prop特性可以通过`$attrs`来取得。在`$attrs`里面只会有props没有注册的特性
