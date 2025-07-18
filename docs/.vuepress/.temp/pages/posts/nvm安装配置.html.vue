<template><div><h1 id="nvm-安装、配置与使用指南" tabindex="-1"><a class="header-anchor" href="#nvm-安装、配置与使用指南" aria-hidden="true">#</a> nvm 安装、配置与使用指南</h1>
<h2 id="_1-nvm-简介" tabindex="-1"><a class="header-anchor" href="#_1-nvm-简介" aria-hidden="true">#</a> 1. nvm 简介</h2>
<p>nvm（Node.js Version Management）是一个用于管理多个 Node.js 版本的工具，可以轻松安装和切换不同版本的 Node.js。</p>
<h2 id="_2-安装-nvm" tabindex="-1"><a class="header-anchor" href="#_2-安装-nvm" aria-hidden="true">#</a> 2. 安装 nvm</h2>
<h3 id="_2-1-安装前准备" tabindex="-1"><a class="header-anchor" href="#_2-1-安装前准备" aria-hidden="true">#</a> 2.1 安装前准备</h3>
<ul>
<li><strong>卸载已安装的 Node.js</strong>：在安装 nvm 之前，请确保已卸载系统中已安装的 Node.js。</li>
</ul>
<h3 id="_2-2-安装步骤" tabindex="-1"><a class="header-anchor" href="#_2-2-安装步骤" aria-hidden="true">#</a> 2.2 安装步骤</h3>
<ol>
<li>下载 nvm 安装程序（<code v-pre>nvm-setup.exe</code>）。</li>
<li>运行安装程序，按照提示进行操作。在安装过程中，可以选择自定义安装目录。</li>
<li>安装完成后，打开命令提示符，输入以下命令验证 nvm 是否安装成功：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>如果显示版本号，则表示安装成功。</p>
<h2 id="_3-配置-nvm" tabindex="-1"><a class="header-anchor" href="#_3-配置-nvm" aria-hidden="true">#</a> 3. 配置 nvm</h2>
<h3 id="_3-1-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-1-配置环境变量" aria-hidden="true">#</a> 3.1 配置环境变量</h3>
<ol>
<li>右键点击“此电脑”，选择“属性”。</li>
<li>点击“高级系统设置”，在弹出的窗口中点击“环境变量”。</li>
<li>在“系统变量”中，查看并添加以下两个变量：
<ul>
<li><strong>变量名</strong>：<code v-pre>NVM_HOME</code>，<strong>变量值</strong>：nvm 的安装路径（例如 <code v-pre>C:\Users\你的用户名\.nvm</code>）。</li>
<li><strong>变量名</strong>：<code v-pre>NVM_SYMLINK</code>，<strong>变量值</strong>：Node.js 的安装路径（例如 <code v-pre>C:\Program Files\nodejs</code>）。</li>
</ul>
</li>
<li>编辑用户变量中的 <code v-pre>Path</code>，添加以下路径：
<ul>
<li>nvm 的安装路径（例如 <code v-pre>C:\Users\你的用户名\.nvm</code>）。</li>
<li>Node.js 的安装路径（例如 <code v-pre>C:\Program Files\nodejs</code>）。</li>
</ul>
</li>
</ol>
<h3 id="_3-2-配置镜像源" tabindex="-1"><a class="header-anchor" href="#_3-2-配置镜像源" aria-hidden="true">#</a> 3.2 配置镜像源</h3>
<ol>
<li>打开 nvm 的配置文件 <code v-pre>settings.txt</code>，通常位于 nvm 的安装目录下。</li>
<li>修改以下内容，添加 Node.js 和 npm 的镜像源：<div class="language-plaintext line-numbers-mode" data-ext="plaintext"><pre v-pre class="language-plaintext"><code>node_mirror:https://npmmirror.com/mirrors/node/
npm_mirror:https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_3-3-创建必要的文件夹" tabindex="-1"><a class="header-anchor" href="#_3-3-创建必要的文件夹" aria-hidden="true">#</a> 3.3 创建必要的文件夹</h3>
<ol>
<li>在 Node.js 的安装路径下（例如 <code v-pre>C:\Program Files\nodejs</code>），新建以下两个文件夹：
<ul>
<li><code v-pre>node_cache</code></li>
<li><code v-pre>node_global</code></li>
</ul>
</li>
<li>配置 npm 的 <code v-pre>prefix</code> 和 <code v-pre>cache</code> 路径：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"C:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_global"</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"C:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_cache"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_4-使用-nvm" tabindex="-1"><a class="header-anchor" href="#_4-使用-nvm" aria-hidden="true">#</a> 4. 使用 nvm</h2>
<h3 id="_4-1-查看可安装的-node-js-版本" tabindex="-1"><a class="header-anchor" href="#_4-1-查看可安装的-node-js-版本" aria-hidden="true">#</a> 4.1 查看可安装的 Node.js 版本</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm list available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-2-安装指定版本的-node-js" tabindex="-1"><a class="header-anchor" href="#_4-2-安装指定版本的-node-js" aria-hidden="true">#</a> 4.2 安装指定版本的 Node.js</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token string">"版本号"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-切换-node-js-版本" tabindex="-1"><a class="header-anchor" href="#_4-3-切换-node-js-版本" aria-hidden="true">#</a> 4.3 切换 Node.js 版本</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm use <span class="token string">"版本号"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-验证当前使用的-node-js-版本" tabindex="-1"><a class="header-anchor" href="#_4-4-验证当前使用的-node-js-版本" aria-hidden="true">#</a> 4.4 验证当前使用的 Node.js 版本</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-nvm-常用命令" tabindex="-1"><a class="header-anchor" href="#_5-nvm-常用命令" aria-hidden="true">#</a> 5. nvm 常用命令</h2>
<ul>
<li><strong>查看可安装的 Node.js 版本</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm list available
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>查看 nvm 版本</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>安装指定版本的 Node.js</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>切换到指定版本的 Node.js</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm use <span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>列出已安装的所有 Node.js 版本</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>为指定版本创建别名</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm <span class="token builtin class-name">alias</span> <span class="token operator">&lt;</span>name<span class="token operator">></span> <span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>卸载指定版本的 Node.js</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>显示当前使用的 Node.js 版本</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>切换到默认的 Node.js 版本</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm use default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li><strong>在指定版本的 Node.js 环境中执行命令</strong>：<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>nvm <span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span>version<span class="token operator">></span> <span class="token operator">&lt;</span>command<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p>希望这份指南能帮助你更好地使用 nvm 来管理 Node.js 版本！</p>
<p>文章来自：https://blog.csdn.net/weixin_42065687/article/details/141320242?fromshare=blogdetail&amp;sharetype=blogdetail&amp;sharerId=141320242&amp;sharerefer=PC&amp;sharesource=qq_45081624&amp;sharefrom=from_link</p>
</div></template>


