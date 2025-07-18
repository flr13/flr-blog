---
title: 事件循环（Event LOOP)
date: '2025-07-18'
category: JavaScript
tags: []
author: 'flr'
---
## 事件循环（Event LOOP)

JavaScript 是单线程的**非阻塞式**的脚本语言

### 1. 单线程

只有一个主线程来处理任务。

### 2. 非阻塞

> JS引擎执行异步任务时，不会一直等待返回结果，主线程会挂起（pending）这个任务，继续执行其他任务，当异步任务返回结果时，js将异步任务的callback放到任务队列中，等到当前任务栈中的任务都执行完毕，处于闲置状态的主线程按照队列顺序将队首的calback函数加入到执行栈中，执行该函数的同步代码，如果又遇到异步任务，再将其回调函数加入到队列中——**事件循环机制**。
> JS通常是非阻塞的，除了某些特殊情况，JS会停止代码执行：alert, confirm, promiss

JS任务分为宏任务和微任务

> 异步任务分为微任务和宏任务.
>
> 微任务：一个需要异步执行的函数，执行时机是在**主函数结束之后，当前宏任务结束之前**。常见的微任务有：Promise.then、MutationObserver、Object.observe（已废弃，被Proxy对象替代),process.nextTick。

> **宏任务：script, setTimeout, setInterval, setImmeditate, T/O, UI rendering**
> **微任务：process, nextTick, promise.then(), object.observe, MutationObserver, await, async**
>
> 注意： new Promise(…)中的代码，也是同步代码，会立即执行。只有then之后的代码，才是异步执行的代码 

> 说明：process.nextTick()是Node.js中的一个API，用于将一个回调函数添加到事件循环的下一轮迭代中执行。它的作用类似于setImmediate，但是它的优先级要比setImmediate()更高，会尽快执行。通常用于在当前事件循环结束后立即执行一些操作，而不需要等待下一轮事件循环。
>
> 
>
> + 宏任务：宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合。常见的宏任务有：script（外层同步代码）、setTimeout/setInterval、UI rendering/UI事件、postMessage、MessageChannel、setImmediate、I/O（Node.js)

执行顺序：     **同步任务 ->微任务->宏任务**

案例：https://www.jianshu.com/p/57863d40cc7a

