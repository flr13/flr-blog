<template><div><p>根据搜索结果，你提到的“SEE 协议”可能是 <strong>Server-Sent Events (SSE)</strong>。这是一种基于 HTTP 协议的服务器向客户端单向推送实时数据的技术。以下是关于 SSE 的详细信息：</p>
<h3 id="sse-server-sent-events-简介" tabindex="-1"><a class="header-anchor" href="#sse-server-sent-events-简介" aria-hidden="true">#</a> SSE（Server-Sent Events）简介</h3>
<ul>
<li><strong>定义</strong>：SSE 是 HTML5 标准中定义的一种技术，允许服务器向客户端推送实时数据。客户端通过建立一个持久的 HTTP 连接，监听服务器发送的事件流。</li>
<li><strong>特点</strong>：
<ul>
<li><strong>单向通信</strong>：仅支持服务器向客户端推送数据，客户端无法通过同一连接向服务器发送数据。</li>
<li><strong>基于 HTTP</strong>：使用标准的 HTTP/HTTPS 协议，兼容性较好，主流浏览器（如 Chrome、Firefox、Safari）均支持，但 IE 和 Opera Mini 不支持。</li>
<li><strong>文本流式传输</strong>：数据以文本形式传输，通常为 JSON 或纯文本格式。</li>
<li><strong>自动重连</strong>：连接中断后，客户端会自动尝试重新连接。</li>
<li><strong>轻量级</strong>：实现简单，无需复杂的握手过程。</li>
</ul>
</li>
</ul>
<h3 id="sse-的应用场景" tabindex="-1"><a class="header-anchor" href="#sse-的应用场景" aria-hidden="true">#</a> SSE 的应用场景</h3>
<ol>
<li><strong>实时通知</strong>：如新闻更新、股票行情、体育赛事比分等。</li>
<li><strong>实时数据更新</strong>：如金融数据、物联网传感器数据等。</li>
<li><strong>大模型流式输出</strong>：如 ChatGPT 的逐字生成、代码生成等。</li>
<li><strong>任务进度监控</strong>：如文件上传进度、任务执行状态等。</li>
</ol>
<h3 id="sse-的技术实现" tabindex="-1"><a class="header-anchor" href="#sse-的技术实现" aria-hidden="true">#</a> SSE 的技术实现</h3>
<h4 id="后端实现-python-flask-示例" tabindex="-1"><a class="header-anchor" href="#后端实现-python-flask-示例" aria-hidden="true">#</a> 后端实现（Python + Flask 示例）</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask<span class="token punctuation">,</span> Response
<span class="token keyword">import</span> time

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">'/stream'</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">event_stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">yield</span> <span class="token string-interpolation"><span class="token string">f"data: 消息 </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">\n\n"</span></span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Response<span class="token punctuation">(</span>event_stream<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mimetype<span class="token operator">=</span><span class="token string">'text/event-stream'</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>debug<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="前端实现-javascript-示例" tabindex="-1"><a class="header-anchor" href="#前端实现-javascript-示例" aria-hidden="true">#</a> 前端实现（JavaScript 示例）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> eventSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">'/stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
eventSource<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
eventSource<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'连接异常'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sse-与其他技术的对比" tabindex="-1"><a class="header-anchor" href="#sse-与其他技术的对比" aria-hidden="true">#</a> SSE 与其他技术的对比</h3>
<table>
<thead>
<tr>
<th>特性</th>
<th>SSE</th>
<th>WebSocket</th>
<th>长轮询</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>协议</strong></td>
<td>HTTP</td>
<td>自定义 TCP 协议</td>
<td>HTTP</td>
</tr>
<tr>
<td><strong>通信方向</strong></td>
<td>单向（服务器 → 客户端）</td>
<td>双向（服务器 ↔ 客户端）</td>
<td>单向（请求-响应）</td>
</tr>
<tr>
<td><strong>复杂度</strong></td>
<td>简单，无需握手</td>
<td>复杂，需维护长连接</td>
<td>高延迟，频繁请求</td>
</tr>
<tr>
<td><strong>兼容性</strong></td>
<td>主流浏览器支持（IE 不支持）</td>
<td>广泛支持（含旧版本）</td>
<td>完全兼容</td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>流式输出、通知推送</td>
<td>实时游戏、协作编辑</td>
<td>旧系统兼容</td>
</tr>
</tbody>
</table>
<h3 id="sse-的局限性" tabindex="-1"><a class="header-anchor" href="#sse-的局限性" aria-hidden="true">#</a> SSE 的局限性</h3>
<ol>
<li><strong>单向通信</strong>：无法实现客户端向服务器的实时推送。</li>
<li><strong>浏览器兼容性</strong>：IE 和 Opera Mini 不支持。</li>
<li><strong>连接管理</strong>：高并发下需要优化服务器资源。</li>
</ol>
<h3 id="未来趋势" tabindex="-1"><a class="header-anchor" href="#未来趋势" aria-hidden="true">#</a> 未来趋势</h3>
<ul>
<li><strong>HTTP/2 Server Push</strong>：结合 HTTP/2 提升性能。</li>
<li><strong>混合架构</strong>：SSE 与 WebSocket 混合使用，互补实现双向通信需求。</li>
</ul>
<p>如果你提到的“SEE 协议”不是 SSE，请提供更多上下文信息，以便我进一步帮助你！</p>
<p>以下是关于 <strong>Server-Sent Events (SSE)</strong> 的介绍和前端使用方法的 Markdown 格式内容：</p>
<hr>
<h1 id="server-sent-events-sse-介绍与前端使用" tabindex="-1"><a class="header-anchor" href="#server-sent-events-sse-介绍与前端使用" aria-hidden="true">#</a> Server-Sent Events (SSE) 介绍与前端使用</h1>
<h2 id="_1-sse-简介" tabindex="-1"><a class="header-anchor" href="#_1-sse-简介" aria-hidden="true">#</a> 1. SSE 简介</h2>
<p><strong>Server-Sent Events (SSE)</strong> 是一种基于 HTTP 协议的技术，允许服务器向客户端推送实时数据。它是一种单向通信机制，仅支持服务器向客户端发送数据，客户端无法通过同一连接向服务器发送数据。</p>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ul>
<li><strong>单向通信</strong>：仅支持服务器向客户端推送数据。</li>
<li><strong>基于 HTTP</strong>：使用标准的 HTTP/HTTPS 协议，兼容性较好。</li>
<li><strong>文本流式传输</strong>：数据以文本形式传输，通常为 JSON 或纯文本格式。</li>
<li><strong>自动重连</strong>：连接中断后，客户端会自动尝试重新连接。</li>
<li><strong>轻量级</strong>：实现简单，无需复杂的握手过程。</li>
</ul>
<h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3>
<ul>
<li>实时通知（如新闻更新、股票行情）</li>
<li>实时数据更新（如金融数据、物联网传感器数据）</li>
<li>任务进度监控（如文件上传进度、任务执行状态）</li>
</ul>
<h2 id="_2-前端使用-sse" tabindex="-1"><a class="header-anchor" href="#_2-前端使用-sse" aria-hidden="true">#</a> 2. 前端使用 SSE</h2>
<h3 id="_2-1-创建-eventsource-对象" tabindex="-1"><a class="header-anchor" href="#_2-1-创建-eventsource-对象" aria-hidden="true">#</a> 2.1 创建 <code v-pre>EventSource</code> 对象</h3>
<p>通过 <code v-pre>EventSource</code> 构造函数创建一个 SSE 客户端实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> eventSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">'/stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>/stream</code> 是后端提供的 SSE 服务接口。</li>
</ul>
<h3 id="_2-2-监听服务器发送的消息" tabindex="-1"><a class="header-anchor" href="#_2-2-监听服务器发送的消息" aria-hidden="true">#</a> 2.2 监听服务器发送的消息</h3>
<p>通过为 <code v-pre>EventSource</code> 实例绑定 <code v-pre>onmessage</code> 事件，接收服务器推送的消息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>eventSource<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到消息:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 在这里处理接收到的消息，例如更新页面内容</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-处理连接错误" tabindex="-1"><a class="header-anchor" href="#_2-3-处理连接错误" aria-hidden="true">#</a> 2.3 处理连接错误</h3>
<p>通过 <code v-pre>onerror</code> 事件处理连接异常。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>eventSource<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'连接异常:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 关闭连接</span>
  eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 可以在这里实现重连逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-关闭连接" tabindex="-1"><a class="header-anchor" href="#_2-4-关闭连接" aria-hidden="true">#</a> 2.4 关闭连接</h3>
<p>当不再需要接收服务器推送的消息时，调用 <code v-pre>close()</code> 方法关闭连接。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-完整的前端代码示例" tabindex="-1"><a class="header-anchor" href="#_2-5-完整的前端代码示例" aria-hidden="true">#</a> 2.5 完整的前端代码示例</h3>
<p>以下是一个完整的前端代码示例，展示了如何使用 SSE 接收服务器推送的消息并更新页面内容。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>SSE 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>服务器推送消息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> eventSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventSource</span><span class="token punctuation">(</span><span class="token string">'/stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    eventSource<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'收到消息:'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> messageContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'message-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> messageElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      messageElement<span class="token punctuation">.</span>textContent <span class="token operator">=</span> event<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      messageContainer<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>messageElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    eventSource<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'连接异常:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'beforeunload'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-注意事项" tabindex="-1"><a class="header-anchor" href="#_3-注意事项" aria-hidden="true">#</a> 3. 注意事项</h2>
<h3 id="_3-1-浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#_3-1-浏览器兼容性" aria-hidden="true">#</a> 3.1 浏览器兼容性</h3>
<ul>
<li>SSE 是 HTML5 标准的一部分，主流浏览器（如 Chrome、Firefox、Safari）均支持，但 IE 和 Opera Mini 不支持。</li>
<li>如果需要兼容这些浏览器，可以使用 <a href="https://github.com/Yaffle/EventSource" target="_blank" rel="noopener noreferrer">polyfill<ExternalLinkIcon/></a> 或其他替代方案。</li>
</ul>
<h3 id="_3-2-自动重连" tabindex="-1"><a class="header-anchor" href="#_3-2-自动重连" aria-hidden="true">#</a> 3.2 自动重连</h3>
<ul>
<li>当连接中断时，<code v-pre>EventSource</code> 会自动尝试重新连接。</li>
<li>可以通过设置 <code v-pre>reconnectInterval</code> 属性来控制重连间隔（单位为毫秒）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>eventSource<span class="token punctuation">.</span>reconnectInterval <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span> <span class="token comment">// 设置重连间隔为 5 秒</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-跨域问题" tabindex="-1"><a class="header-anchor" href="#_3-3-跨域问题" aria-hidden="true">#</a> 3.3 跨域问题</h3>
<ul>
<li>如果 SSE 服务接口位于不同的域名下，需要在服务器端设置 <code v-pre>Access-Control-Allow-Origin</code> 响应头，允许跨域访问。</li>
</ul>
<h3 id="_3-4-关闭连接" tabindex="-1"><a class="header-anchor" href="#_3-4-关闭连接" aria-hidden="true">#</a> 3.4 关闭连接</h3>
<ul>
<li>当不再需要接收服务器推送的消息时，调用 <code v-pre>close()</code> 方法关闭连接。</li>
<li>建议在页面关闭时关闭连接，避免资源浪费。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'beforeunload'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  eventSource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4. 总结</h2>
<p>通过 <code v-pre>EventSource</code> 对象，前端可以轻松实现对服务器推送消息的监听和处理。SSE 提供了一种简单、高效的方式，适用于实时通知、数据更新等场景。在使用过程中，需要注意浏览器兼容性、自动重连、跨域等问题，并合理管理连接的生命周期。</p>
<hr>
<p>希望这份文档对你有帮助！如果你需要进一步调整格式或内容，请告诉我。</p>
</div></template>


