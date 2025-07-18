---
title: vue父子组件通信
date: '2025-07-18'
category: Vue
tags: []
---
## vue父子组件通信

1. 父传子

   利用v-bind来绑定需要的值

   父组件：

   ```vue
   
   <template>
     <div>
       <child :users="user" @info="getInfo"></child>
     </div>
   <script>
   import { child } from "./child";
   export default {
     components: { child },
     methods: {
       getInfo(value) {
         // value 就是子组件传递过来的数据
       }
     }
   };
   </script>
   ```

   子组件

   利用props来接收父组件传过来的值

   ```vue
   <template>
     <div   @click="datas">{{ users }}</div>
   </template>
    
   <script>
   export default {
     props: ["users"]
    methods: {
       datas() {
         this.$emit("info", value); //info是父组件绑定的方法名称
       }
     }
   };
   </script>
   ```

   

2. 子传父

   子组件通过事件的方式，利用 $emit 给父组件传值。

   **注意：$emit 的第一个参数是父组件自定义事件的方法名，后边的 “value” 是子组件要给父组件传递的数据** 
