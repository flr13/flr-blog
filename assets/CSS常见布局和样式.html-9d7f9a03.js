import{_ as s,o as a,c as t,e as p}from"./app-b78b632b.js";const e={};function i(c,n){return a(),t("div",null,n[0]||(n[0]=[p(`<h2 id="css常见布局和样式" tabindex="-1"><a class="header-anchor" href="#css常见布局和样式" aria-hidden="true">#</a> CSS常见布局和样式</h2><h4 id="两栏布局" tabindex="-1"><a class="header-anchor" href="#两栏布局" aria-hidden="true">#</a> 两栏布局</h4><p><strong>如何实现？</strong></p><ol><li><p>父宽度固定+左浮动+右宽度自适应 /BFC</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.content</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
       //设置宽度自适应
		<span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
        //或者触发BFC
        ov
		<span class="token property">background</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父相对定位+左绝对定位+右margin</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content</span><span class="token punctuation">{</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token comment">/* 父元素相对定位 */</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span><span class="token punctuation">{</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span><span class="token punctuation">{</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>浮动+BFC</p></li><li><p>父 flex+左宽度固定+右flex:1</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.content</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
		<span class="token comment">/* width: auto; */</span>
		<span class="token property">background</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父table+左右 table-cell</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>	<span class="token selector">.content</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token comment">/* width: auto; */</span>
		<span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token selector">.mid</span><span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span>blueviolet<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>100%
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="三栏布局" tabindex="-1"><a class="header-anchor" href="#三栏布局" aria-hidden="true">#</a> 三栏布局</h4><ol><li><p>左右浮动+中间自适应（流式布局）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>   		<span class="token selector">&lt;div class=&quot;left&quot;&gt;1&lt;/div&gt;
		&lt;div class=&quot;right&quot;&gt;2&lt;/div&gt;
        //中间的div不能写在 中间
		&lt;div class=&quot;mid&quot;&gt;中间&lt;/div&gt;
  .content</span> <span class="token punctuation">{</span>
		<span class="token comment">/* width: 100%; */</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  	 <span class="token punctuation">}</span>

	<span class="token selector">.left</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.right</span> <span class="token punctuation">{</span>
		<span class="token comment">/* width: auto; */</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
		<span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> aqua<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.mid</span><span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span>blueviolet<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 200px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span>100%
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>双飞翼布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;div class=&quot;content&quot;&gt;
		&lt;div class=&quot;left&quot;&gt;1&lt;/div&gt;
		&lt;div class=&quot;right&quot;&gt;2&lt;/div&gt;
		&lt;div class=&quot;mid&quot;&gt;
			&lt;div class=&quot;main&quot;&gt;
				中间
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
css
这里只写中间div样式，其余和圣杯布局一致
	.mid</span><span class="token punctuation">{</span>
		<span class="token comment">/* float: left; */</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.main</span><span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span>blueviolet<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0 200px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>圣杯布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mid</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> -200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>flex布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.left</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mid</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Table布局</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.left</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.mid</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.right</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="垂直居中布局" tabindex="-1"><a class="header-anchor" href="#垂直居中布局" aria-hidden="true">#</a> 垂直居中布局</h4><ol><li><p>父line-height==height +子inline-block元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
		<span class="token property">line-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    //行内元素
		<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>transform</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
		<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token selector">.box</span>  <span class="token punctuation">{</span>
	    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> cadetblue<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
		<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ol>`,8)]))}const o=s(e,[["render",i],["__file","CSS常见布局和样式.html.vue"]]);export{o as default};
