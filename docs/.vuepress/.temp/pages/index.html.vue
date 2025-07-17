<template><div><h1 id="常见问题与解决方案" tabindex="-1"><a class="header-anchor" href="#常见问题与解决方案" aria-hidden="true">#</a> 常见问题与解决方案</h1>
<h2 id="npm常用命令" tabindex="-1"><a class="header-anchor" href="#npm常用命令" aria-hidden="true">#</a> npm常用命令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token parameter variable">-v</span> <span class="token comment">#查看npm安装的版本。</span>
<span class="token function">npm</span> init <span class="token comment">#会引导你建立一个package.json文件，包括名称、版本、作者等信息。</span>
<span class="token function">npm</span> list <span class="token comment">#查看当前目录下已安装的node包。</span>
<span class="token function">npm</span> <span class="token function">ls</span> <span class="token comment">#查看当前目录下已安装的node包。</span>
<span class="token function">npm</span> <span class="token function">install</span> moduleNames <span class="token comment">#安装Node模块到本地目录node_modules下。</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span> name <span class="token operator">></span> <span class="token parameter variable">-g</span> <span class="token comment">#将包安装到全局环境中。</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span> name <span class="token operator">></span> <span class="token parameter variable">--save</span> <span class="token comment">#安装的同时，将信息写入package.json中，项目路径中若是有package.json文件时，直接使用npm install方法就能够根据dependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span> name<span class="token operator">></span> --save-dev <span class="token comment">#安装的同时，将信息写入package.json中项目路径中若是有package.json文件时，直接使用npm install方法就能够根据devDependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。</span>
<span class="token function">npm</span> uninstall moudleName：<span class="token comment">#卸载node模块。</span>
<span class="token function">npm</span> i --legacy-peer-deps  <span class="token comment">#降版本</span>

nvm <span class="token function">install</span> <span class="token number">16</span> <span class="token comment">#安装需要的node版本</span>
nvm use <span class="token number">16.17</span>.0 <span class="token comment">#使用该版本号的node</span>
nvm list <span class="token comment">#查看当前安装的所有node版本</span>
nvm <span class="token function">ls</span> <span class="token comment">#查看当前安装的所有node版本</span>
nvm list available <span class="token comment">#显示所有可下载的版本</span>
nvm <span class="token builtin class-name">alias</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">16.17</span>.0<span class="token punctuation">]</span> <span class="token comment">#给不同的版本号添加别名</span>
nvm <span class="token builtin class-name">unalias</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span> <span class="token comment">#删除已定义的别名</span>
nvm <span class="token builtin class-name">alias</span> default <span class="token punctuation">[</span><span class="token number">16.17</span>.0<span class="token punctuation">]</span> <span class="token comment">#设置默认版本</span>
nvm current <span class="token comment">#查看当前 node 版本</span>
<span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span> <span class="token comment">#强制清缓存</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目常见报错与解决方案" tabindex="-1"><a class="header-anchor" href="#项目常见报错与解决方案" aria-hidden="true">#</a> 项目常见报错与解决方案</h2>
<ol>
<li>关于报错：无法加载文件 D:\node\node_global\yarn.ps1，因为在此系统上禁止运行脚本的问题</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>get-ExecutionPolicy <span class="token comment">#看状态  结果为 Restricted</span>
set-ExecutionPolicy RemoteSigned <span class="token comment">#将其设置为RemoteSigned</span>
get-ExecutionPolicy  <span class="token comment">#再次看状态 ，结果为 RemoteSigned</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>npm install安装报错 gyp info it worked if it ends with ok  使用 cnpm install node-sass -g</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> uninstall node-sass <span class="token comment">#卸载当前版本</span>
<span class="token function">npm</span> <span class="token function">install</span> node-sass@4.14.0  <span class="token comment">#安装指定版本,若依然报错使用cnpm 安装</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org <span class="token comment">#cnpm -v看是否安装，若没有，安装cnpm</span>
cnpm <span class="token function">install</span> node-sass <span class="token parameter variable">--save</span> （使用淘宝镜像安装node-sass）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>Integrity check failed for “antd“ (computed integrity doesn‘t match our records 报错</p>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code>1、清理缓存
yarn cache clean
 
2、安装依赖
命令参考 https:<span class="token operator">/</span><span class="token operator">/</span>classic<span class="token punctuation">.</span>yarnpkg<span class="token punctuation">.</span>com/en/docs/<span class="token function">cli</span><span class="token operator">/</span>install/
 
yarn install <span class="token operator">--</span>no-lockfile <span class="token operator">--</span><span class="token function">update-checksums</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="项目常用规范" tabindex="-1"><a class="header-anchor" href="#项目常用规范" aria-hidden="true">#</a> 项目常用规范</h2>
<ol>
<li>
<p>git提交信息规范</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>feat: 【ipm2.0】-【故障预处理详情-接口对接 <span class="token punctuation">[</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span> :alien <span class="token punctuation">]</span>  <span class="token comment">#功能点:feat ；修复bug:fix </span>

Description: 接口对接

Jira: <span class="token comment">#IPM-622</span>
如果接口定义好后，后端说要变动的，改url，改method, 改数据结构的，都在git commit message 第一行加  <span class="token punctuation">(</span>人名xxx<span class="token punctuation">)</span> :alien <span class="token punctuation">]</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>注释规范</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
* @description: 附件按钮不可点击
* @param {object} row当前行数据
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="git-工作流" tabindex="-1"><a class="header-anchor" href="#git-工作流" aria-hidden="true">#</a> Git 工作流</h2>
<ol>
<li>
<p>创建 ssh</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"邮件地址"</span>  <span class="token comment">#创建SSH Key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>关联远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>仓库名<span class="token operator">></span> <span class="token operator">&lt;</span>远程仓库地址<span class="token operator">></span> <span class="token comment"># 关联远程仓库，仓库名一般使用origin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>推送提交</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>仓库名<span class="token operator">></span> <span class="token operator">&lt;</span>分支名<span class="token operator">></span> <span class="token comment"># 把文件推送到远程仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>git常用的命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> add.
<span class="token function">git</span> commit <span class="token parameter variable">--m</span> <span class="token string">'xxx'</span>
<span class="token function">git</span> status
<span class="token function">git</span> remote <span class="token parameter variable">-v</span>
<span class="token function">git</span> push
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token comment">#查看提交历史</span>
<span class="token function">git</span> reflog <span class="token parameter variable">--oneline</span> <span class="token comment"># 查看需要回滚的所有ID</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>  commitId  <span class="token comment">#回退到指定版本</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token comment">#修改最新一次提交的描述信息</span>
<span class="token function">git</span> stash
<span class="token function">git</span> stash pop
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> panda
例如现在有三个分支
主分支 master
分支一 develop
自己的分支 coupon_clj_2020

和并coupon_clj_2020和develop，要把自己分支的代码合并到develop上去。

一：git checkout develop
二：git pull
三：git merge --no-edit coupon_clj_2020
三：git push origin develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>回退指定的文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset commit_id fileName <span class="token comment">#指定文件回到历史状态更新到暂缓区，但工作区的还没变；</span>
<span class="token function">git</span> checkout – fileName <span class="token comment">#更新到工作区</span>
<span class="token function">git</span> reset HEAD fileName <span class="token comment">#可以撤销回到当前版本</span>
<span class="token function">git</span> st 显示的不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>个人分支合并到主分支，远端个人分支消失   ，git pull 提示错误</p>
<p><img src="@source/C:/Users/spurs/AppData/Roaming/Typora/typora-user-images/1651714169877.png" alt="1651714169877"></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout 主分支  <span class="token comment">#切回主分支</span>
<span class="token function">git</span> pull <span class="token comment">#拉取最新的代码</span>
<span class="token function">git</span> fetch <span class="token parameter variable">-p</span> 
<span class="token function">git</span> checkout 个人分支  <span class="token comment">#切到个人分支 </span>
<span class="token function">git</span> branch --unset-upstream <span class="token comment">#再次更新远程分支</span>
<span class="token function">git</span> checkout 个人分支 <span class="token comment">#再切回个人分支</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span> origin/主分支名 个人分支名 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>git如何删除指定提交后的无用历史</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--oneline</span> 
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span>  commitId <span class="token comment">#将head指向需要删除前的id</span>
<span class="token function">git</span> push origin HEAD <span class="token parameter variable">-f</span>  <span class="token comment">#删除该id后的所有提交</span>
<span class="token function">git</span> log <span class="token parameter variable">--oneline</span>  <span class="token comment">#此时只有该id之后的提交已删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>git commit 提交的时候报错husky &gt; pre-commit hook failed (add --no-verify to bypass)（解决办法）</p>
<p>分析：这个问题是因为当你在终端输入git commit -m &quot;XXX&quot;,提交代码的时候,pre-commit(客户端)钩子，它会在Git键入提交信息前运行做代码风格检查。如果代码不符合相应规则，则报错，而它的检测规则就是根据.git/hooks/pre-commit文件里面的相关定义。查询了网上的解决办法，总结为以下三种解决方案，个人喜欢第三种：</p>
<p>（1）<strong>卸载husky</strong>，只要把项目的package.json文件中devDependencies节点下的husky库删掉，然后重新npm i 一次即可。或者直接在项目根目录下执行npm uninstall husky --save也可以，再次提交，自动化测试功能就屏蔽掉
（2）进入项目的.git文件夹(文件夹默认隐藏,可先设置显示或者命令ls查找),再进入hooks文件夹,<strong>删除pre-commit文件,重新git commit -m 'xxx' git push即可</strong>。
（3）将git commit -m &quot;XXX&quot; 改为 git commit --no-verify -m &quot;XXX&quot;</p>
<h2 id="项目常用函数" tabindex="-1"><a class="header-anchor" href="#项目常用函数" aria-hidden="true">#</a> 项目常用函数</h2>
<ol>
<li>判断不为空</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>systemNameList <span class="token operator">=</span> res<span class="token punctuation">.</span>data
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>深克隆</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">this</span><span class="token punctuation">.</span>originalData <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>
<p>数组去重</p>
<p>形式  [{}]</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>   <span class="token doc-comment comment">/**
    * 去重，根据元素的某一个属性来进行去重
    * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span>
    *  使用：this.clearOne([...this.resourceList]
    */</span>
    <span class="token function">clearOne</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>el-tree使用setCheckedKeys清空树节点</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>treeName<span class="token punctuation">.</span><span class="token function">setCheckedKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>resetFields不生效的原因</p>
<blockquote>
<p>场景:  新增和编辑界面 使用同一个弹窗表单</p>
<p>进入列表页面后，先点击编辑按钮，然后点击新增按钮，显示的弹出框显示刚才编辑的内容。弹出框的closeInfo方法是调用了resetFields方法的，但是没有生效。</p>
</blockquote>
</li>
</ol>
<p>​     解决方法:</p>
<blockquote>
<p>resetFields不生效的原因：
此方法是将form表单的数据设置为初始值，而这个初始值是在form mouted生命周期被赋值上去的。所以，在form mounted之前，如果form表单赋值了，那么后面调用resetFields都是无效的，因为form表单的初始值已经在mounted之前就被赋值了。
解决办法：
只要在form表单mounted之后再进行赋值操作这样就可以完美解决问题了，也就是说在点击编辑赋值的时候使用this.$nextTick方法</p>
</blockquote>
<ol start="6">
<li>scheme?.code ?? this.formInline.scheme</li>
</ol>
<p>这段代码是使用了 JavaScript 中的 nullish coalescing 运算符 <code v-pre>??</code>，它的作用是在左侧操作数（<code v-pre>scheme?.code</code>）的值为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时，返回右侧操作数（<code v-pre>this.formInline.scheme</code>）的值。</p>
<p>其中，<code v-pre>.</code> 表示对象属性的访问操作符。<code v-pre>?</code> 是可选链操作符，表示如果左侧的操作数存在，则继续访问右侧的属性或方法；否则返回 <code v-pre>undefined</code>。</p>
<p>因此，<code v-pre>scheme?.code</code> 的意思是：如果 <code v-pre>scheme</code> 存在且具有 <code v-pre>code</code> 属性，则返回 <code v-pre>scheme.code</code> 的值；否则返回 <code v-pre>undefined</code>。</p>
<p>而整个表达式的含义是：如果 <code v-pre>scheme?.code</code> 的值为 <code v-pre>null</code> 或 <code v-pre>undefined</code>，则返回 <code v-pre>this.formInline.scheme</code> 的值。这里的 <code v-pre>this</code> 表示当前对象，即执行该代码的对象。</p>
<ol start="7">
<li>
<p>对object 重新处理，保存值不变，返回新的不同属性的object</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 获取资源方案的选项</span>
    <span class="token function">getSchemeOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">schemeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>formInline<span class="token punctuation">.</span>schemeOptions <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> item<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> item<span class="token punctuation">.</span>code
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setDetailData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>发布包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>employee / East@132<span class="token operator">!</span>@<span class="token comment">#这是公用的账蜜。。。。使用nexus，，目前下载与发布是分开不同url的。</span>

<span class="token function">npm</span> <span class="token function">install</span>  时用这个 http://nexus.eastcom-sw.com/repository/npm-public/
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--registry</span> http://nexus.eastcom-sw.com/repository/npm-public/
<span class="token function">yarn</span> <span class="token function">install</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>http://nexus.eastcom-sw.com/repository/npm-public/
publish时用这个  
http://nexus.eastcom-sw.com/repository/npm-releases/

<span class="token function">npm</span> login <span class="token parameter variable">-registry</span> http://nexus.eastcom-sw.com/repository/npm-releases/

employee/East@123<span class="token operator">!</span>@<span class="token comment">#</span>
wangping@eastcom-sw.com
gitHub@flr13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>选择合并指定的commit</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> log  //查看提交的日志，复制要合并的那个分支的commit id<span class="token punctuation">(</span>简略ID-前8位数<span class="token punctuation">)</span>

<span class="token function">git</span> checkout 要合并的分支  // 切换到要合并的分支上

<span class="token function">git</span> cherry-pick 上面复制的那个要合并的commit <span class="token function">id</span>  // 提交该commit到当前分支

<span class="token function">git</span> push // 推送到B分支远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装lodash 并使用</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">npm</span>
$ <span class="token function">npm</span> i <span class="token parameter variable">--save</span> lodash
全局使用 main.js
<span class="token function">import</span> _ from <span class="token string">'lodash'</span>
Vue.prototype._ <span class="token operator">=</span>_

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>json 字符串转换</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>JSON.parse<span class="token punctuation">(</span>string<span class="token punctuation">)</span> ：接受一个 JSON 字符串并将其转换成一个 JavaScript 对象
JSON.stringify<span class="token punctuation">(</span>obj<span class="token punctuation">)</span> ：接受一个 JavaScript 对象并将其转换为一个 JSON 字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ol>
</div></template>


