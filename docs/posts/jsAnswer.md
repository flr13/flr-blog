答案

1.  Js里面基本数据类型和复杂数据分别是什么，他们的语法是什么? 

​    Js中基本数据类型包括数字、字符串、布尔值、null和undefined。复杂数据类型包括对象和数组。

它们的语法如下：

```js
数字：var num = 10; 
字符串：var str = "Hello World"; 
布尔值：var bool = true; 
null：var n = null; 
undefined：var u = undefined;
对象：var obj = {name: "Tom", age: 18};
数组：var arr = [1, 2, 3];
```

2.  Js 中什么是局部作用域?什么是全局作用域 

​    (1) 局部作用域是指变量只在函数内部有效，函数外部无法访问。

   (2) 全局作用域是指变量在整个程序中都有效，可以在任何地方访问。

3.  什么是属性?什么是方法?请简述 

​    (1)  属性是指对象的特征，如车的名称、颜色、大小等。

​    (2) 方法是指对象的行为，如车的移动、旋转，运行等。

4.  在js中获取标签(元素)的方法是什么? 

```js
通过ID获取：document.getElementById('id')，其中id为标签的id属性值。

通过标签名获取：document.getElementsByTagName('tagname')，其中tagname为标签名，如div、p等。

通过类名获取：document.getElementsByClassName('classname')，其中classname为标签的class属性值。

通过选择器获取：document.querySelector('selector') 或 document.querySelectorAll('selector')，其中selector为CSS选择器，如#id、.classname、tagname等
```

6. js常见的事件

   ```js
   1.onclick()  鼠标左键单击事件
   
   2.onmouseover  鼠标进入事件
   
   3.onmouseout  鼠标离开事件
   
   4.onfocus  获取焦点事件
   
   5.onblur  失去焦点事件
   
   6.onmousemove  鼠标移动事件
   
   7.onscroll  滚动条滚动事件
   
   8. onkeydown / onkeyup  键盘按下/抬起事件
   
   1.keyCode  获取按下的是哪个按键 
   
   9. onmousedown / onmouseup  鼠标按下/抬起事件
   
   ```

   7.  请用is 程序编写出倒计时 

      ```js
      var countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();
      
      var x = setInterval(function() {
      
        var now = new Date().getTime();
      
        var distance = countDownDate - now;
      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);
      
      ```

   8.  当程序报错时，我的排错思路

      1.查看控制台输出的错误信息，确定错误的类型和位置。

      2.根据错误信息和代码逐行对比，找出错误的原因。可能的错误原因包括语法错误、逻辑错误、变量未定义等。

      3.使用调试工具逐行调试代码，找出错误的位置和原因。可以使用断点、单步执行等功能来逐步排查错误。

      4.如果还是无法解决问题，可以向社区或专业人士寻求帮助。可以在论坛、社交媒体等平台上发帖求助，或者向相关领域的专业人士咨询。比如[csdn](https://www.csdn.net/)
   
   ### css

一、实现元素的水平垂直居中可以通过以下几种方式实现：

- 使用Flexbox布局：通过设置父元素为`display: flex;`，并且使用`justify-content: center;`和`align-items: center;`来实现水平和垂直居中。
- 使用Grid布局：通过设置父元素为`display: grid;`，并且使用`place-items: center;`来实现元素的水平和垂直居中。
- 使用绝对定位和transform：通过设置元素的`position: absolute;`，然后使用`top: 50%; left: 50%; transform: translate(-50%, -50%);`来实现元素的水平和垂直居中。

二、盒子模型是指在网页布局中，每个元素都被看作是一个矩形的盒子，这个盒子包含内容、内边距、边框和外边距四个部分。盒子模型的属性包括`content`（内容）、`padding`（内边距）、`border`（边框）和`margin`（外边距），这些属性决定了元素在页面中的大小和位置。

三、BFC（Block Formatting Context）模式是指块级格式化上下文，它是Web页面中的一种渲染模式，用于决定块级盒子如何布局。BFC具有以下特性：

- 内部的盒子会在垂直方向上一个接一个地放置。
- 盒子垂直方向的边距会发生重叠。
- BFC区域不会与浮动盒子重叠。
- BFC可以包含浮动的子元素。
- BFC的边界由包含块的边界或者由浮动元素的边界所限定。

### js

一、数据类型有哪几种？ES新增的数据类型 在JavaScript中，数据类型包括原始数据类型和引用数据类型。原始数据类型有：Number、String、Boolean、Null、Undefined、Symbol（ES6新增）、BigInt（ES10新增）。引用数据类型有：Object。

二、项目中用过哪些ES6？ 在项目中常用的ES6特性包括箭头函数、模板字符串、解构赋值、let和const声明变量、Promise、模块化等。

三、什么是箭头函数？ 箭头函数是ES6中新增的一种函数定义方式，通过`=>`符号来定义函数，它具有以下特点：

- 箭头函数没有自己的this，会捕获其所在上下文的this值。
- 箭头函数不能作为构造函数使用，不能使用`new`关键字。
- 箭头函数没有`arguments`对象，可以使用rest参数来代替。

四、Promise的用法和原理？ Promise是用于处理异步操作的对象，它有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。Promise的基本用法包括使用`new Promise()`创建一个Promise实例，然后通过`.then()`和`.catch()`方法来处理成功和失败的情况。Promise的原理是基于事件循环机制，通过微任务队列来处理异步操作，确保异步操作的顺序和结果。

五、什么是事件处理机制？ 事件处理机制是指浏览器中用于处理用户交互和页面操作的一种机制。当用户触发某个事件（如点击、滚动、输入等）时，浏览器会将事件加入到事件队列中，然后通过事件循环机制来处理这些事件，执行相应的事件处理函数。

六、什么是事件循环机制？ 事件循环机制是指浏览器中用于处理异步操作的一种机制。事件循环包括宏任务队列和微任务队列，通过事件循环的不断轮询，将异步操作按照优先级依次执行，确保异步操作的顺序和结果。

七、什么是闭包？ 闭包是指函数和函数内部能访问到的外部变量形成的组合。闭包可以保留函数内部的变量状态，使得函数可以访问和修改这些变量，即使函数执行完毕后，这些变量仍然可以被访问和修改。

八、什么是事件委托？ 事件委托是一种优化事件处理的方法，通过将事件绑定到父元素上，利用事件冒泡的机制，在父元素上统一处理子元素的事件。这样可以减少事件处理函数的数量，提高性能。

九、继承有哪几种方式？ 在JavaScript中，继承可以通过原型链继承、构造函数继承、组合继承、原型式继承、寄生式继承、ES6中的class继承等方式来实现。

十、网页怎么进行优化？ 网页优化包括前端性能优化、SEO优化、用户体验优化等方面。具体优化方法包括减少HTTP请求、压缩资源、使用CDN加速、优化图片、减少重绘和重排、合理使用缓存、提高页面加载速度等。

### vue

1. Vue组件有多个生命周期钩子函数，常用的包括：created、mounted、updated、destroyed等。初始化数据通常会在created生命周期中进行。销毁的生命周期一般处理一些清理操作，例如清除定时器、取消订阅等。
2. 数据存储使用函数的好处是可以将数据存储逻辑封装在函数内部，提高代码的可维护性和复用性。
3. v-if是条件渲染，会在DOM中添加或移除元素；而v-show是简单的显示/隐藏元素，只是通过CSS的display属性来控制元素的显示与隐藏。
4. 使用v-if和v-for一起会导致性能问题，因为v-if会频繁地创建和销毁DOM元素。解决办法是尽量避免在同一个元素上同时使用v-if和v-for，可以考虑在父元素上使用v-if，或者使用计算属性等方式优化。
5. 在循环渲染数据时，绑定key的作用是帮助Vue识别每个节点的唯一性，以便在数据变化时高效地更新DOM。
6. computed是计算属性，基于依赖进行缓存，只有依赖发生变化时才会重新计算；而watch是侦听属性的变化并做出相应的响应。
7. 插槽（slot) 是Vue中用于分发内容的机制，可以让父组件向子组件传递内容，或者让子组件自定义内容的一种灵活方式。
8. Vuex是Vue.js的状态管理工具，用于集中管理应用的所有组件的状态。其实现原理包括单一状态树、状态的改变通过提交mutation等。
9. Vue双向绑定的原理是通过数据劫持和发布-订阅模式实现的。Vue3进行了一些优化，如使用Proxy代替Object.defineProperty提升性能，实现了更快的响应式系统。DIFF算法用于比较虚拟DOM的差异，从而高效地更新真实DOM。
10. 实现服务端渲染可以使用Vue提供的Vue SSR（服务器端渲染）技术，将Vue组件在服务器端渲染成HTML字符串，提高首屏加载速度和SEO友好性。

### 算法题

1. 渲染十万条数据可以考虑使用虚拟滚动技术，只渲染当前可见的部分数据，而不是全部渲染。另外，可以采用分页或懒加载的方式，根据用户的滚动行为动态加载数据，以提高性能和用户体验。

2. 单点登录（SSO）的流程是用户只需登录一次，即可访问多个应用程序。通常流程涉及用户登录一次后，可以无需再次登录即可访问多个应用程序，这是通过认证协议如OAuth、OpenID Connect或SAML等实现的，用户的身份由中心化的认证服务器验证。

3. 在生产环境遇到问题时，可以通过使用日志工具捕获错误和事件、监控工具跟踪性能指标，以及使用远程调试工具检查应用程序状态等方式进行调试。同时，重要的是要有适当的错误处理和日志记录机制，以快速识别和解决问题。

4. 在JavaScript中克隆一个对象，可以使用扩展运算符（spread operator）、Object.assign()方法或JSON.parse()和JSON.stringify()方法等。以下是使用扩展运算符的示例：

  ```js
  const originalObject = { key: 'value' };
  const clonedObject = { ...originalObject }
  ```

  ;

5. 在JavaScript中去重一个数组，可以使用多种方法。一种常见的方法是使用Set对象，它会自动去除重复的值。以下是一个示例：

  ```js
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = [...new Set(arrayWithDuplicates)];
  ```

  

6. 在JavaScript中对1到100的数字进行排序，可以使用Array.from()方法创建包含1到100数字的数组，然后使用sort()方法进行排序。以下是一个示例：

  ```js
  const numbersArray = Array.from({ length: 100 }, (_, index) => index + 1);
  numbersArray.sort((a, b) => a - b);
  ```

  