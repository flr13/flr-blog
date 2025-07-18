<template><div><h1 id="vuex-状态管理" tabindex="-1"><a class="header-anchor" href="#vuex-状态管理" aria-hidden="true">#</a> vuex 状态管理</h1>
<p>vuex中一共有五个状态 State Getter Mutation  Action  Module</p>
<p><img src="https://img-blog.csdnimg.cn/20200714140121359.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTAzNTgxNjg=,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"></p>
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2>
<blockquote>
<p>提供唯一的公共数据源，所有共享的数据统一放到store的state进行储存，相似与data</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span>
 
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//数据，相当于data</span>
 <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//里面定义方法，操作state方法</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 操作异步操作mutation</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用：</h5>
<p>在vuex中state中定义数据，可以在任何组件中进行调用</p>
<ol>
<li>
<p>在标签中使用  {{ $store.state.全局数据名称 }}</p>
</li>
<li>
<p>获取数据 ： this.$store.state.全局数据名称</p>
</li>
<li>
<p>从vuex中按需导入mapstate函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuex"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="mutation" tabindex="-1"><a class="header-anchor" href="#mutation" aria-hidden="true">#</a> Mutation</h2>
<p>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数, 其中参数state参数是必须的，也可以自己传递一个参数 .</p>
<p>定义一些方法。</p>
<h5 id="如何使用-1" tabindex="-1"><a class="header-anchor" href="#如何使用-1" aria-hidden="true">#</a> 如何使用</h5>
<p>使用commit触发Mutation操作</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>mathodName<span class="token punctuation">)</span>  <span class="token comment">// mathodName 是 mutation 定义的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="action-——进行异步操作" tabindex="-1"><a class="header-anchor" href="#action-——进行异步操作" aria-hidden="true">#</a> Action ——进行异步操作</h2>
<blockquote>
<p>Action和Mutation相似，Mutation 不能进行异步操作，若要进行异步操作，就得使用Action</p>
</blockquote>
<p><strong>在组件中使用：</strong></p>
<p>方法一：</p>
<p>直接使用 dispath触发Action函数</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre v-pre class="language-kotlin"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispath</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"reduce"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法二：使用辅助函数</p>
<h2 id="getter" tabindex="-1"><a class="header-anchor" href="#getter" aria-hidden="true">#</a> Getter</h2>
<blockquote>
<p>类似于vue中的computed，进行缓存，对于Store中的数据进行加工处理形成新的数据</p>
</blockquote>
<h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2>
<p>当遇见大型项目时，数据量大，store就会显得很臃肿</p>
<p>为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割</p>
</div></template>


