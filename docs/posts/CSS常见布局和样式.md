## CSS常见布局和样式

#### 两栏布局

**如何实现？**

1. 父宽度固定+左浮动+右宽度自适应 /BFC

   ```css
   	.content {
   		width: 100%;
   		height: 300px;
   	}
   
   	.left {
   		width: 200px;
   		float: left;
   		background: red;
   	}
   	.right {
          //设置宽度自适应
   		width: auto;
           //或者触发BFC
           ov
   		background: aqua;
   	}
   ```

2. 父相对定位+左绝对定位+右margin

   ```css
   .content{
   	height: 300px;
   	width: 100%;
   	/* 父元素相对定位 */
   	position: relative;
   }
   .left{
   	height: 100%;
   	background: red;
   	position: absolute;
   	width: 200px;
   }
   .right{
   	height: 100%;
   	margin-left: 200px;
   	background: green;
   }
   ```

3. 浮动+BFC

4. 父 flex+左宽度固定+右flex:1

   ```css
   	.content {
   		width: 100%;
   		display: flex;
   		height: 300px;
   	}
   
   	.left {
   		width: 200px;
   		background: red;
   	}
   	.right {
   		flex: 1;
   		/* width: auto; */
   		background: aqua;
   	}
   ```

   

5. 父table+左右 table-cell

   ```css
   	.content {
   		width: 100%;
   		display: table;
   		height: 300px;
   	}
   
   	.left {
   		width: 200px;
   		display: table-cell;
   		background: red;
   	}
   	.right {
   		/* width: auto; */
   		display: table-cell;
   		background: aqua;
   	}
       .mid{
   		background:blueviolet;
   		height:100%
   	}
   ```

#### 三栏布局

1. 左右浮动+中间自适应（流式布局）

   ```css
      		<div class="left">1</div>
   		<div class="right">2</div>
           //中间的div不能写在 中间
   		<div class="mid">中间</div>
     .content {
   		/* width: 100%; */
   		height: 300px;
     	 }
   
   	.left {
   		width: 200px;
   		float: left;
           height:100%;
   		background: red;
   	}
   	.right {
   		/* width: auto; */
   		width: 200px;
           height:100%;
   		float: right;
   		background: aqua;
   	}
   	.mid{
   		background:blueviolet;
           margin: 0 200px;
   		height:100%
   	}
   ```

2. 双飞翼布局

   ```css
   <div class="content">
   		<div class="left">1</div>
   		<div class="right">2</div>
   		<div class="mid">
   			<div class="main">
   				中间
   			</div>
   		</div>
   	</div>
   css
   这里只写中间div样式，其余和圣杯布局一致
   	.mid{
   		/* float: left; */
   		height: 100%;
           width: 100%;
   	}
   	.main{
   		background:blueviolet;
   		margin: 0 200px;
   		height: 100%;
   	}
   ```

3. 圣杯布局

   ```css
   .content {
       margin-left: 200px;
       margin-right: 200px;
   	position: relative;
     }
     .left {
       float: left;
       width: 200px;
       height: 200px;
       background-color: red;
       position: relative;
       left: -200px;
     }
     .mid {
       float: left;
       width: 100%;
       height: 200px;
       background-color: cadetblue;
   	position: absolute;
     }
   
     .right {
       float: left;
       height: 200px;
       width: 200px;
       background-color: aquamarine;
       margin-left: -200px;
       position: absolute;
       right: -200px;
     }
   ```

4. flex布局

   ```css
    .content {
       display: flex;
     }
     .left {
       width: 200px;
       height: 200px;
       background-color: red;
     }
     .mid {
       width: 100%;
       height: 200px;
       background-color: cadetblue;
     }
     .right {
       height: 200px;
       width: 200px;
       background-color: aquamarine;
     }
   ```

5. Table布局

   ```css
   .content {
       display: table;
   	width: 100%;
     }
     .left {
   	display: table-cell;
       width: 200px;
       height: 200px;
       background-color: red;
     }
     .mid {
       width: 100%;
       height: 200px;
       background-color: cadetblue;
     }
     .right {
       height: 100px;
   	display: table-cell;
       width: 200px;
       background-color: aquamarine;
     }
   ```

#### 垂直居中布局

1. 父line-height==height +子inline-block元素

   ```css
   .content {
   		height: 600px;
   		width: 600px;
   		border: 1px solid red;
   		line-height: 600px;
   		text-align: center;
     }
   .box{
       //行内元素
   		display: inline-block;
   		height: 30px;
           width: 30px;
   		background: cadetblue;
   	}
   ```

2. transform  

   ```css
   .content {
   		height: 600px;
   		width: 600px;
   		border: 1px solid red;
   		margin: 0 auto;
   		position: relative;
     }
   .box  {
   	    position: relative;
   		height: 30px;
           width: 30px;
   		background: cadetblue;
   		left: 50%;
   		top:50%;
   		transform: translateY(-50%);
   	}
   ```

   

3. 