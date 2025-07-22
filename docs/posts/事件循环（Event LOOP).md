---
title: 事件循环（Event LOOP)
date: '2025-07-18'
category: JavaScript
tags: []
author: 'flr'
---

# 事件循环（Event LOOP）

JavaScript 是单线程的非阻塞式的脚本语言。

## 1. 单线程

只有一个主线程来处理任务。

## 2. 非阻塞

JS 引擎执行异步任务时，不会一直等待返回结果，主线程会挂起（pending）这个任务，继续执行其他任务。当异步任务返回结果时，JS 将异步任务的 callback 放到任务队列中。等到当前任务栈中的任务都执行完毕，处于闲置状态的主线程按照队列顺序将队首的 callback 函数加入到执行栈中，执行该函数的同步代码。如果又遇到异步任务，再将其回调函数加入到队列中——这就是事件循环机制。

JS 通常是非阻塞的，除了某些特殊情况，JS 会停止代码执行，例如：`alert`、`confirm`、`prompt`。

## 3. JS 任务分类

### 3.1 宏任务

时间粒度比较大，执行的时间间隔不能精确控制。常见的宏任务包括：

- script（外层同步代码）
- `setTimeout` 和 `setInterval`
- UI rendering/UI 事件
- `postMessage`
- `MessageChannel`
- `setImmediate`（Node.js）
- I/O 操作（Node.js）

### 3.2 微任务

一个需要异步执行的函数，执行时机是在主函数结束之后，当前宏任务结束之前。常见的微任务包括：

- `Promise.then`
- `MutationObserver`
- `Object.observe`（已废弃，被 `Proxy` 对象替代）
- `process.nextTick`（Node.js）

**注意**：`new Promise(...)` 中的代码是同步代码，会立即执行。只有 `then` 之后的代码才是异步执行的代码。

**说明**：`process.nextTick()` 是 Node.js 中的一个 API，用于将一个回调函数添加到事件循环的下一轮迭代中执行。它的作用类似于 `setImmediate`，但优先级更高，会尽快执行。通常用于在当前事件循环结束后立即执行一些操作，而不需要等待下一轮事件循环。

## 4. 执行顺序

同步任务 -> 微任务 -> 宏任务

## 5. 案例

[案例链接](https://www.jianshu.com/p/57863d40cc7a)

---
