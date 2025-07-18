---
title: map - set的Deep-sum
date: '2025-07-18'
category: JavaScript
tags: []
---
# map 和 set的深度解析

**Set是集合的数据结构   而  Map是字典的数据结构**

那什么是集合和字典呢

- 集合

  >   集合，是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合 

- 字典

  >  字典（dictionary）是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

那么集合和字典又有什么区别呢？

- ​    共同点：集合、字典都可以存储不重复的值
-    不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存在

## Set和Map使用

>   Set 定义: `Set` 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用，`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。 `Set`中的元素只会出现一次，**即 `Set` 中的元素是唯一的**   
>
>  Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个 for...of 循环在每次迭代后会返回一个形式为[key，value]的数组 

基本使用

  

1. 语法

   ```js
   let map =new Map()
   let set= new Set()
   ```

   

2. 操作方法

   ```js
   set(key, value): 向 Map 中加入或更新键值对
   get(key): 读取 key 对用的值，如果没有，返回 undefined
   has(key): 某个键是否在 Map 对象中，在返回 true 否则返回 false
   delete(key): 删除某个键，返回 true, 如果删除失败返回 false
   clear(): 删除所有元素
   ```

3. 遍历方法

   ```js
   keys()：返回键名的遍历器
   values()：返回键值的遍历器
   entries()：返回所有成员的遍历器
   forEach()：遍历 Map 的所有成员
   ```
