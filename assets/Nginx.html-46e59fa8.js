import{_ as t,o as s,c as a,e}from"./app-b78b632b.js";const i={};function l(o,n){return s(),a("div",null,n[0]||(n[0]=[e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><p>参考文章 https://www.jb51.net/article/148809.htm</p><h2 id="nginx-location-路径匹配规则" tabindex="-1"><a class="header-anchor" href="#nginx-location-路径匹配规则" aria-hidden="true">#</a> Nginx Location 路径匹配规则</h2><table><thead><tr><th>没有前缀</th><th>匹配以指定模式开头的location</th></tr></thead><tbody><tr><td>=</td><td>精准匹配，不是以指定模式开头</td></tr><tr><td>~</td><td>正则匹配，区分大小写</td></tr><tr><td>~*</td><td>正则匹配，不区分大小写</td></tr><tr><td>^~</td><td>非正则匹配，匹配以指定模式开头的location</td></tr><tr><td>/</td><td>通用匹配, 如果没有其它匹配,任何请求都会匹配到</td></tr></tbody></table><h2 id="location匹配顺序" tabindex="-1"><a class="header-anchor" href="#location匹配顺序" aria-hidden="true">#</a> <strong>location匹配顺序</strong></h2><p>多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配</p><p>普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配）</p><p>当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配</p><p>所有类型location存在时，“=”匹配 &gt; “^~”匹配 &gt; 正则匹配 &gt; 普通（最大前缀匹配）</p><p>示例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location <span class="token operator">=</span> / <span class="token punctuation">{</span>
 <span class="token comment"># 精确匹配 / ，主机名后面不能带任何字符串</span>
 <span class="token punctuation">[</span> configuration A <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location / <span class="token punctuation">{</span>
 <span class="token comment"># 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求</span>
 <span class="token comment"># 但是正则和最长字符串会优先匹配</span>
 <span class="token punctuation">[</span> configuration B <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location /documents/ <span class="token punctuation">{</span>
 <span class="token comment"># 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索</span>
 <span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>
 <span class="token punctuation">[</span> configuration C <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location ~ /documents/Abc <span class="token punctuation">{</span>
 <span class="token comment"># 匹配任何以 /documents/Abc 开头的地址，匹配符合以后，还要继续往下搜索</span>
 <span class="token comment"># 只有后面的正则表达式没有匹配到时，这一条才会采用这一条</span>
 <span class="token punctuation">[</span> configuration CC <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location ^~ /images/ <span class="token punctuation">{</span>
 <span class="token comment"># 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。</span>
 <span class="token punctuation">[</span> configuration D <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
 <span class="token comment"># 匹配所有以 gif,jpg或jpeg 结尾的请求</span>
 <span class="token comment"># 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则</span>
 <span class="token punctuation">[</span> configuration E <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location /images/ <span class="token punctuation">{</span>
 <span class="token comment"># 字符匹配到 /images/，继续往下，会发现 ^~ 存在</span>
 <span class="token punctuation">[</span> configuration F <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location /images/abc <span class="token punctuation">{</span>
 <span class="token comment"># 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在</span>
 <span class="token comment"># F与G的放置顺序是没有关系的</span>
 <span class="token punctuation">[</span> configuration G <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location ~ /images/abc/ <span class="token punctuation">{</span>
 <span class="token comment"># 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用</span>
  <span class="token punctuation">[</span> configuration H <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
 
location ~* /js/.*/<span class="token punctuation">\\</span>.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用正则" tabindex="-1"><a class="header-anchor" href="#常用正则" aria-hidden="true">#</a> 常用正则</h2><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">h</td><td style="text-align:center;">匹配除换行符以外的任意字符</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">重复0次或1次</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">重复1次或更多次</td></tr><tr><td style="text-align:center;">*</td><td style="text-align:center;">重复0次或更多次</td></tr><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">匹配数字</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">匹配字符串的开始</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">匹配字符串的介绍</td></tr><tr><td style="text-align:center;">{n}</td><td style="text-align:center;">重复n次</td></tr><tr><td style="text-align:center;">{n,}</td><td style="text-align:center;">重复n次或更多次</td></tr><tr><td style="text-align:center;">[c]</td><td style="text-align:center;">匹配单个字符c</td></tr><tr><td style="text-align:center;">[a-z]</td><td style="text-align:center;">匹配a-z小写字母的任意一个</td></tr></tbody></table><p>小括号()之间匹配的内容，可以在后面通过$1来引用，$2表示的是前面第二个()里的内容。</p><p><strong>正则里面容易让人困惑的是\\转义特殊字符。</strong></p><ol><li><p>无斜杠</p><blockquote><p>proxy_pass：http://localhost:3000。</p><p><strong>无斜杆location匹配到的部分也属于请求的部分</strong>。</p><p>location无论用/get还是用/get/只要匹配上之后都会将整个请求部分/get/test加到proxy_pass上</p><p>http://localhost:3000+/get/test等于请求http://localhost:3000/get/test</p></blockquote></li><li><p>有斜杠</p></li></ol><blockquote><p>proxy_pass：http://localhost:3000/。</p><p>有斜杆location匹配到的部分只用于匹配，不属于请求部分，需要在请求部分将location匹配到的部分剔除。</p><p>location用/get则是http://localhost:3000/+(/get/test -/get)等于请求http://localhost:3000//test</p><p>location用/get/则是http://localhost:3000/+(/get/test -/get/)等于请求http://localhost:3000/test</p></blockquote><ol start="3"><li><p>有斜杠也有字符串</p><blockquote><p>proxy_pass：http://localhost:3000/abc。</p><p>同有斜杆的规则，在请求部分剔除location后加在上面即可。</p><p>location用/get则是http://localhost:3000/abc+(/get/test -/get)等于请求http://localhost:3000/abc/test</p><p>location用/get/则是http://localhost:3000/abc+(/get/test -/get/)等于请求http://localhost:3000/abctest</p></blockquote><p>location /resources { proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header REMOTE-HOST $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; proxy_pass http://10.20.1.60:18896 ; }</p><p>http://10.20.1.60:18890/galaxy/resources/</p></li></ol>`,18)]))}const p=t(i,[["render",l],["__file","Nginx.html.vue"]]);export{p as default};
