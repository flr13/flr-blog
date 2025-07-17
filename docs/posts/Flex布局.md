## Flex布局

### 1.1 介绍

全称： Flex 是 Flexible Box 的缩写，意为"弹性布局" 

![img](https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png) 

> 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

### 1.2  容器的属性

```css
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap
flex-flow
justify-content
align-items
align-content
```

1. flex-direction   元素 排列方向 

   ```css
   .box {
     flex-direction: row | row-reverse | column | column-reverse;
   }css
   ```

   > row（默认值）：主轴为水平方向，起点在左端。 左
   >
   > row-reverse：主轴为水平方向，起点在右端。右
   > column：主轴为垂直方向，起点在上沿。下
   > column-reverse：主轴为垂直方向，起点在下沿。上对齐

2. flex-wrap  是否换行

   ```css
   .box{
     flex-wrap: nowrap | wrap | wrap-reverse;
   }
   ```

   > nowrap:  不换行
   >
   > wrap: 换行 
   >
   > wrap-reverse: 逆向换行

3. justify-content属性  元素的对齐方式

   ```css
   .box {
     justify-content: flex-start | flex-end | center | space-between | space-around;
   }
   ```

   > flex-start:  左对齐
   >
   > flex-end  :右对齐
   >
   > center： 居中
   >
   > space-between： 两端对齐，项目之间的间隔都相等 
   >
   > space-around：  每个项目两侧的间隔相等 

4. 