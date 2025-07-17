# mixins的引入

## 什么是mixins

  混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。 混入( mixins)是vue官方文档提出的 关于vue复用性的一种方式 。

应用场景： 当组件需要重复定义属性与方法时，引入mixins特性

## 如何使用

 mixins是一个js对象，它可以包含我们组件中script项中的任意功能选项，如data、components、methods 、created、computed等等 

![img](https://img-blog.csdnimg.cn/img_convert/a86dba646b9916dda1dcc0c4bdf4a97b.png) 

## 混入特性

 方法和参数在各组件中不共享，虽然组件调用了mixins并将其属性合并到自身组件中来了，但是其属性只会被当前组件所识别并不会被共享，也就是其他组件无法从当前组件中获取到mixins中的数据和方法。 