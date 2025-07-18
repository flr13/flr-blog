<template><div><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> <a href="https://blog.csdn.net/2302_76329106/article/details/139447910" target="_blank" rel="noopener noreferrer">vue3<ExternalLinkIcon/></a></h1>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ol>
<li>
<h5 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h5>
<ul>
<li>打包大小减少41%</li>
<li>初次渲染快51%，更新渲染快133%</li>
<li>内存占用减少54%</li>
</ul>
</li>
<li>
<h5 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h5>
<ul>
<li>使用Proxy 代替Object.defineProperty 实现双向数据绑定</li>
<li>重写虚拟DOM的实现和Tree-Shaking</li>
<li>vue3 更好的支持typescript</li>
</ul>
</li>
<li>
<h5 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h5>
<p>(1)  <strong>composition API（组合式api）</strong></p>
<ul>
<li>setup配置</li>
<li>ref和reactive</li>
<li>watch 和watchEffect</li>
<li>provide和inject</li>
</ul>
<p>(2) <strong>提供了新的内置组件</strong></p>
<ul>
<li>Fragment</li>
<li>Teleport</li>
<li>Suspense</li>
</ul>
<p>(3) <strong>其他改变</strong></p>
<ul>
<li>新的生命周期钩子</li>
<li>移除keyCode 作为v-on的修饰符</li>
</ul>
</li>
</ol>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>// <span class="token number">1</span>. 确保你的vue-cli 脚手架版本在4.5.0以上，这样才能创建
// <span class="token number">2</span>. 检查脚手架版本  vue <span class="token parameter variable">-V</span> 或 vue <span class="token parameter variable">--version</span>
// <span class="token number">3</span>. 如果版本低话，重新安装vue-cli   <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli  
// <span class="token number">4</span>. vue create vue3-project
// <span class="token number">5</span>. <span class="token builtin class-name">cd</span> vue3-project
// <span class="token number">6</span>. <span class="token function">npm</span> run serve 启动项目
 <span class="token function">npm</span> init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<ol>
<li></li>
</ol>
</div></template>


