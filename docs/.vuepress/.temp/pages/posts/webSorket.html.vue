<template><div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> webSocket</h2>
<p>WebSocket是HTML5开始提供的一种网络通信协议，使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。</p>
<h3 id="_2、websocket-的方法" tabindex="-1"><a class="header-anchor" href="#_2、websocket-的方法" aria-hidden="true">#</a> 2、WebSocket 的方法</h3>
<p>ws.send() -- 向服务器发送数据
ws.close() -- 关闭连接</p>
<h4 id="_3、-websocket-的事件" tabindex="-1"><a class="header-anchor" href="#_3、-websocket-的事件" aria-hidden="true">#</a> 3、 WebSocket 的事件</h4>
<p>ws.onopen - 建立连接时触发
ws.onmessage - 客户端接收服务端数据时触发
ws.onerro -通信错误时触发
ws.onclose - 连接错误时触发</p>
<h3 id="_4、websoket-readystate" tabindex="-1"><a class="header-anchor" href="#_4、websoket-readystate" aria-hidden="true">#</a> 4、Websoket.readyState</h3>
<p>readyState属性返回实例对象的当前状态，有四种状态
0 - 表示正在连接
1 - 表示连接成功可以通信
2 - 表示连接正在关闭
3 - 表示连接已经关闭，或者打开链接失败</p>
<h3 id="_5、websoket使用" tabindex="-1"><a class="header-anchor" href="#_5、websoket使用" aria-hidden="true">#</a> <strong>5、Websoket使用</strong></h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>
<span class="token comment">//创建一个webSoket对象</span>
<span class="token keyword">let</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'接口地址'</span><span class="token punctuation">)</span>
 
<span class="token comment">//连接成功时触发</span>
ws<span class="token punctuation">.</span><span class="token function">onopen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   conson<span class="token punctuation">.</span>log（<span class="token string">'连接成功'</span>）
<span class="token punctuation">}</span>
 
<span class="token comment">//连接失败时触发</span>
ws<span class="token punctuation">.</span><span class="token function">onerror</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   conson<span class="token punctuation">.</span>log（<span class="token string">'连接失败'</span>）
<span class="token punctuation">}</span>
 
<span class="token comment">//向服务端发送请求</span>
ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment">//接收消息时触发</span>
ws<span class="token punctuation">.</span><span class="token function">onmessage</span><span class="token punctuation">(</span><span class="token parameter">MessageEvent</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    conson<span class="token punctuation">.</span>log（MessageEvent<span class="token punctuation">.</span>data）
<span class="token punctuation">}</span>
 
<span class="token comment">//连接关闭</span>
ws<span class="token punctuation">.</span><span class="token function">onclose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    conson<span class="token punctuation">.</span>log（<span class="token string">'连接关闭'</span>）
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


