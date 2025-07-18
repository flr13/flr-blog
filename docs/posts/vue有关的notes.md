---
title: vue有关的notes
date: '2025-07-18'
category: 未分类
tags: []
---
# vue有关的notes

## create()与activated()的区别

- created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；
- activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等



