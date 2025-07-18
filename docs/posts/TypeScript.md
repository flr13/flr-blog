---
title: TypeScript
date: '2025-07-18'
category: 框架
tags: []
---
# TypeScript

## 1. 简介

 TypeScript 是 Javascript 的超集，遵循最新的 ES6、ES5 规范，TypeScript 扩展了 JavaScript 的语法 ，对类型进行了约束，限制。

**ts 的优势**

1. 支持类型检查，编译时运行，减少bug,类型错误
2. 语法提示
3. 方便代码重构

三者之间的关系

 <img src="https://img-blog.csdnimg.cn/img_convert/bf82b4a61ef55a8ead788f64f74ec178.png" alt="img" style="zoom:50%;" /> 

## 2. 下载安装

```sh
npm install -g typescript  全局安装
tsc -v     查看版本
tsc xxx.ts   生成js文件
node xxx.js  运行js文件
```

##  3. typescript的类型

### 3.1 类型注解

**变量后面空格: 类型**     形如  let 变量名: 变量类型 = 初始化值; 

```ts
let num :number=12   
```

###  3.2  类型

1. 原始类型

   ```tsx
   let num: number = 90
   
   let str: string = '123'
   
   let bool: boolean = true
   
   let n: null = null
   
   let unde: undefined = undefined
   
   let sysbol: symbol = Symbol()
   ```

2. 数组类型

   两种写法:

   ```tsx
   let nums: number[] = [1, 2, 3]
   let strs: Array<string> = ['1', '2', '3']
   ```

3. 元组类型

   （1）解构赋值

   （2） ？当前元素类型可以不唯一   可有可无

   （3） ... 剩余元素 (最后一个元素任意length)

   （4） readonly  只读元素  

   ```tsx
   let a: [number, string] = [1, '232']
   ```

4.  枚举类型

    定义:

   **enum** 枚举名 {         
       标识符[= 整型常数/字符串],
       标识符[= 整型常数/字符串], 
       ...
       标识符[= 整型常数/字符串],
   };

   ```tsx
   enum Flag {
       success,
       error,
       overtime
   };
   
   let s: Flag = Flag.overtime;
   ```

5. #### any类型

   TypeScript 中的 any 类型表示任意数据类型。

   ```tsx
   let s:any=xxx
   ```

6.  void 类型

   ```tsx
   function a(): void {
     console.log('这是一个函数')
   }ts
   ```

7. never 类型

8. 组合类型

   ```tsx
   let as: number | undefined | string = 'll'
   ```


9. 类型别名 **type**

```tsx
type 别名 = 类型
```

10. 函数类型

     函数的类型实际上指的是：`函数参数`和`返回值`的类型 

    ```tsx
    // 普通函数
    function 函数名(形参1： 类型=默认值， 形参2：类型=默认值): 返回值类型 { }
    
    // 箭头函数
    const 函数名（形参1： 类型=默认值， 形参2：类型=默认值):返回值类型 => { }
    
    ```

     函数返回值类型为：`void` 

    ```tsx
    function greet(name: string): void {
      console.log('Hello', name)
    }
    ```

11. 接口类型 **interface（**接口） 

    1. 使用 `interface` 关键字来声明接口

    2. 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头

    3. 声明接口后，直接使用接口名称作为变量的类型

       ```tsx
       / 接口的写法-------------
       interface IPerson {
       	name: string,
       	age: number
       }
       
       const user1：IPerson = {
       	name: 'a',
       	age: 20
       }
       
       // type的写法-------------
       type Person  = {
       	name: string,
       	age: number
       }
       const user2：Person = {
       	name: 'b',
       	age: 20
       }
       ```

       接口的继承 关键字 extends

       ```tsx
        interface 接口2 extends 接口1 {    属性1： 类型1， *// 接口2中特有的类型*    ...  } 
        interface Point2D { x: number; y: number }
       // 继承 Point2D
       interface Point3D extends Point2D {
         z: number
       }
       ```

12.  类型断言  关键字 as

13. 类 class

14. 泛型 
    
> 泛型是指附属于函数、类、接口、类型别名之上的类型，当某个函数的参数，返回值和内部使用时的类型无法确定的情况下，就可以使用泛型来进行约束 , **可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据**

```
function fn<T>(value:T):T{
  return value 
}
fn()
```

