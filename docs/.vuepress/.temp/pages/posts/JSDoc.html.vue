<template><div><h1 id="js注释说明" tabindex="-1"><a class="header-anchor" href="#js注释说明" aria-hidden="true">#</a> js注释说明</h1>
<h2 id="js注释" tabindex="-1"><a class="header-anchor" href="#js注释" aria-hidden="true">#</a> js注释</h2>
<ol>
<li>
<p><strong>单行</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 单行注释 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>普通多行注释</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">/*
      多行注释
      1.总是再多行注释的结束符前留一个空格,使星号对齐
      2.不要把注释写在多行注释的开始符和结束符所在行，而是写在之间
  */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="jsdoc-注释" tabindex="-1"><a class="header-anchor" href="#jsdoc-注释" aria-hidden="true">#</a> JSDoc  注释</h2>
<p>官方文档：https://jsdoc.zcopy.site/</p>
<p>使用手册：https://www.shouce.ren/api/view/a/13232</p>
<p>JSDoc是一个根据javascript文件中注释信息，生成JavaScript应用程序或库、模块的API文档 的工具。可以记录如：命名空间，类，方法，方法参数等。类似JavaDoc和PHPDoc。现在很多编辑器或IDE中还可以通过JSDoc直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。</p>
<p>安装它</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> jsdoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注释符</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 前面留一个空格，再写描述
 * 或者多行描述
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数/方法注释说明</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数功能说明
 * 关键字
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键字：https://www.shouce.ren/api/view/a/13311</p>
<p>常用关键字</p>
<p><img src="@source/posts/C:/Users/spurs/AppData/Roaming/Typora/typora-user-images/1652428014959.png" alt="1652428014959"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token doc-comment comment">/**
    * <span class="token keyword">@function</span> 处理表格的行
    * <span class="token keyword">@description</span> 合并Grid的行
    * <span class="token keyword">@param</span> <span class="token parameter">grid</span> <span class="token punctuation">{</span>Ext.Grid.Panel<span class="token punctuation">}</span> 需要合并的Grid
    * <span class="token keyword">@param</span> <span class="token parameter">cols</span> <span class="token punctuation">{</span>Array<span class="token punctuation">}</span> 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
    * <span class="token keyword">@param</span> <span class="token parameter">isAllSome</span> <span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span> ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；     false(默认)：不完全一样
    * <span class="token keyword">@return</span> void
    * <span class="token keyword">@author</span> polk6 2015/07/21 
    * <span class="token keyword">@example</span>
    <span class="token example">* <span class="token code language-javascript">_________________ _________________</span>
    * <span class="token code language-javascript"><span class="token operator">|</span> 年龄 <span class="token operator">|</span> 姓名 <span class="token operator">|</span> <span class="token operator">|</span> 年龄 <span class="token operator">|</span> 姓名 <span class="token operator">|</span></span>
    * <span class="token code language-javascript"><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token function">mergeCells</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span></span>
    * <span class="token code language-javascript"><span class="token operator">|</span> <span class="token number">18</span> <span class="token operator">|</span> 张三 <span class="token operator">|</span> <span class="token operator">=></span> <span class="token operator">|</span> <span class="token operator">|</span> 张三 <span class="token operator">|</span></span>
    * <span class="token code language-javascript"><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">-</span> <span class="token number">18</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span></span>
    * <span class="token code language-javascript"><span class="token operator">|</span> <span class="token number">18</span> <span class="token operator">|</span> 王五 <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> 王五 <span class="token operator">|</span></span>
    * <span class="token code language-javascript"><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span></span></span>
    */</span>
  <span class="token keyword">function</span> <span class="token function">mergeCells</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">grid</span><span class="token operator">:</span> Ext<span class="token punctuation">.</span>Grid<span class="token punctuation">.</span>Panel<span class="token punctuation">,</span> <span class="token literal-property property">cols</span><span class="token operator">:</span> Number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">isAllSome</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do Something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用部分关键字说明</p>
<p><a href="https://www.shouce.ren/api/view/a/13289" target="_blank" rel="noopener noreferrer">@param<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 标签后跟参数类型，然后是参数名，最后是参数描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> 这里写变量的描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span> - 或者加上连字符便于阅读
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">c</span> - 又或者这个参数有一个很长很长很长
 * 很长很长很长很长很长非常长的描述，可以这样占用多行
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13296" target="_blank" rel="noopener noreferrer">@returns<ExternalLinkIcon/></a></p>
<p><strong>别名@return</strong> 记录一个函数的返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 关于返回值的描述
 */</span>
<span class="token keyword">function</span> <span class="token function">myFn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13253" target="_blank" rel="noopener noreferrer">@callback<ExternalLinkIcon/></a></p>
<p><strong>@callback</strong>如果参数接受一个回调函数，您可以使用<code v-pre>@callback</code>标签来定义一个回调类型，然后回调类型包含到<code v-pre>@param</code>标签中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token doc-comment comment">/**
     * <span class="token keyword">@callback</span> cb callBackName
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">prop1</span> 回调函数参数1
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">prop2</span> 回调函数参数2
     */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13305" target="_blank" rel="noopener noreferrer">@type<ExternalLinkIcon/></a></p>
<p><strong>@type</strong>  描述变量、 参数、属性类型</p>
<ul>
<li><code v-pre>null</code> <code v-pre>undefined</code> <code v-pre>number</code> <code v-pre>string</code> <code v-pre>boolean</code> <code v-pre>symbol</code> <code v-pre>object</code> <code v-pre>array</code></li>
<li><code v-pre>?number</code> 可以是<code v-pre>null</code>和<code v-pre>number</code></li>
<li><code v-pre>!number</code> 非空<code v-pre>number</code></li>
<li><code v-pre>string</code>|<code v-pre>number  </code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 一个对象类型的变量
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个字符或者数字类型的变量
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val2<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 类型为数字或为空
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val3<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 类型为数字或且不能为空
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>!number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> val4<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个字符串的数组
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 一个包含一个字符串和一个数字类型的对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">.</span><span class="token punctuation">&lt;</span>string<span class="token punctuation">,</span> number<span class="token punctuation">></span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 指定具体键和类型的对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>a<span class="token operator">:</span> string<span class="token punctuation">,</span> b<span class="token operator">:</span> number<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 指定具体键和类型的命名对象
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> obj3
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> obj3.a
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> obj3.b
 */</span>
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13303" target="_blank" rel="noopener noreferrer">@todo<ExternalLinkIcon/></a></p>
<p>@todo 可以让你记录要完成的任务。在一个JSDoc注释块中可以包含多个<code v-pre>@todo</code>标签。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * todo 待做事说明描述
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13291" target="_blank" rel="noopener noreferrer">@property<ExternalLinkIcon/></a></p>
<p>别名@prop ，记录一个对象的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">**</span>
 <span class="token operator">*</span> @namespace
 <span class="token operator">*</span> @property <span class="token punctuation">{</span>object<span class="token punctuation">}</span>  defaults               <span class="token operator">-</span> The <span class="token keyword">default</span> values <span class="token keyword">for</span> parties<span class="token punctuation">.</span>
 <span class="token operator">*</span> @property <span class="token punctuation">{</span>number<span class="token punctuation">}</span>  defaults<span class="token punctuation">.</span>players       <span class="token operator">-</span> The <span class="token keyword">default</span> number <span class="token keyword">of</span> players<span class="token punctuation">.</span>
 <span class="token operator">*</span> @property <span class="token punctuation">{</span>string<span class="token punctuation">}</span>  defaults<span class="token punctuation">.</span>level         <span class="token operator">-</span> The <span class="token keyword">default</span> level <span class="token keyword">for</span> the party<span class="token punctuation">.</span>
 <span class="token operator">*</span> @property <span class="token punctuation">{</span>object<span class="token punctuation">}</span>  defaults<span class="token punctuation">.</span>treasure      <span class="token operator">-</span> The <span class="token keyword">default</span> treasure<span class="token punctuation">.</span>
 <span class="token operator">*</span> @property <span class="token punctuation">{</span>number<span class="token punctuation">}</span>  defaults<span class="token punctuation">.</span>treasure<span class="token punctuation">.</span>gold <span class="token operator">-</span> How much gold the party starts <span class="token keyword">with</span><span class="token punctuation">.</span>
 <span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">players</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">level</span><span class="token operator">:</span>   <span class="token string">'beginner'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">treasure</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">gold</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.shouce.ren/api/view/a/13298" target="_blank" rel="noopener noreferrer">@since<ExternalLinkIcon/></a></p>
<p>@since标签标明一个类，方法，或其它标识符是在哪个特定版本开始添加进来的</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Provides access to user information.
 * <span class="token keyword">@since</span> 1.0.1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用的注释格式</p>
<ol>
<li>注释api 接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 对端配置项(配置项关系新增)
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">param</span>
 * <span class="token keyword">@author</span> wuhaili
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTreeList</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Vue<span class="token punctuation">.</span><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/v1/cmdb/modeler/model/scheme/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param<span class="token punctuation">.</span>schemeId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>param<span class="token punctuation">.</span>modelId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">param</span><span class="token operator">:</span> param
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


