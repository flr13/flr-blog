---
title: yarn link
date: '2025-07-18'
category: 工具
tags: []
---
## yarn link

1、什么是 yarn link？
开发中，两个项目或多个项目之间相互依赖时，用 yarn link连接，
例如：我们现在有项目B，B中利用npm / yarn 包管理器 引入了 包 A，A是我们自己开发封装的组件，我们修改了组件A的内容，在还没有重新发布组件A 的时候，想要在项目B 中 检查组件A修改的是否正确，这个时候就需要用到yarn link

2.如何使用

（1）在包A （即封装好的组件库）中执行 `yarn link`
（2）对包A进行 想要的修改 💻
（3）执行 yarn buid （打包代码：具体指令按照package.json中scrpit来执行）**可省略**
（4）在项目B 中执行**yarn link [包A的名称]** 并重新执行 yarn 并清除浏览器缓存
这个时候就能在项目B 中查看改动之后的效果
（5）结束之后，在项目B 中 执行 yarn unlink [包A的名字]来取消连接

