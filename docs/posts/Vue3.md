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

### 创建项目

```shell
// 1. 确保你的vue-cli 脚手架版本在4.5.0以上，这样才能创建
// 2. 检查脚手架版本  vue -V 或 vue --version
// 3. 如果版本低话，重新安装vue-cli   npm install -g @vue/cli  
// 4. vue create vue3-project
// 5. cd vue3-project
// 6. npm run serve 启动项目
 npm init vue@latest
```

### 语法

 1.