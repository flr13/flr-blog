import{_ as t,r as s,o as u,c as v,e as a,a as i,b as e,d as l,w as c}from"./app-273c6a11.js";const o={},m={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"};function p(b,n){const d=s("ExternalLinkIcon"),r=s("RouterLink");return u(),v("div",null,[n[4]||(n[4]=a(`<h1 id="qiankun-template" tabindex="-1"><a class="header-anchor" href="#qiankun-template" aria-hidden="true">#</a> QIANKUN-TEMPLATE</h1><p>本项目采用 vue + qiankun 实践微前端落地。 同时 qiankun 是一个开放式微前端架构，支持当前三大前端框架甚至 jq 等其他项目无缝接入。 此项目为了尽可能的简单易上手，以及方便文章讲解，大部分逻辑都在主应用和子应用的 main.js 来回施展</p><h2 id="微前端主功能" tabindex="-1"><a class="header-anchor" href="#微前端主功能" aria-hidden="true">#</a> 微前端主功能</h2><hr><ul><li><p>微前端主应用与子应用构建</p></li><li><p>全局状态控制</p></li><li><p>主应用和子应用之间动态通信</p></li><li><p>主应用资源下发至子应用</p></li><li><p>各应用间路由基础管理</p></li><li><p>公共资源处理</p></li></ul><p>项目架构</p><hr><p>以上下天地布局为标准，粉红色是基座，只负责头部导航，绿色是挂载的整个子应用，点击头部导航可切换子应用</p><h2 id="什么是微前端" tabindex="-1"><a class="header-anchor" href="#什么是微前端" aria-hidden="true">#</a> 什么是微前端</h2><hr><blockquote><p>Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently. 微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。</p></blockquote><p>微前端 是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立开发、独立部署。</p><p>微前端的核心价值：</p><ul><li>技术栈无关</li><li>独立开发</li><li>独立部署</li></ul><h2 id="qiankun" tabindex="-1"><a class="header-anchor" href="#qiankun" aria-hidden="true">#</a> QIANKUN</h2><hr><p>QIANKUN 是基于 Single-SPA ，提供了更加开箱即用的 API （ single-spa + sandbox + import-html-entry ）</p><h3 id="主应用" tabindex="-1"><a class="header-anchor" href="#主应用" aria-hidden="true">#</a> 主应用</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> <span class="token function">add</span> qiankun <span class="token comment"># 或者 npm i qiankun -S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1、在主应用中注册微应用， 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { registerMicroApps } from &#39;qiankun&#39;;

export function registerApps(microApps) {
	registerMicroApps(microApps, {
		// eslint-disable-next-line no-unused-vars
		beforeLoad: (app) =&gt; {},
		// eslint-disable-next-line no-unused-vars
		beforeMount: [(app) =&gt; {}],
		// eslint-disable-next-line no-unused-vars
		afterMount: [(app) =&gt; {}],
		// eslint-disable-next-line no-unused-vars
		afterUnmount: [(app) =&gt; {}]
	});
}

// 子应用列表（开发环境使用/config/registrableApp.js,生产环境请求后端接口/apps，目前页面上没有入口添加应用，必须得后端操作）
microApps:[
	{
     	name: string, // 主应用的名称，唯一 
        entry: string, // 开发环境的项目路径
        activeRule: string // 生产环境的项目路径
     },
     {}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、菜单管理中配置菜单信息，菜单url为&quot;/对应子应用的activeRule/嵌入的子应用对应页面路由&quot;，例如当前嵌入子应用egcip-dcpp-alarm-ui中的告警任务运行监控页面，</p><h3 id="子应用" tabindex="-1"><a class="header-anchor" href="#子应用" aria-hidden="true">#</a> 子应用</h3><p>1、子应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。 子应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 <code>bootstrap</code>、<code>mount</code>、<code>unmount</code> 三个生命周期钩子，以供主应用在适当的时机调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function poweredRender(props = {}) {
	const { activeRule, access_token, enumValue } = props;
	router = new VueRouter({
		mode: &#39;history&#39;,
		base: window.__POWERED_BY_QIANKUN__ ? activeRule : &#39;/&#39;,
		routes: window.__POWERED_BY_QIANKUN__ ? constantRouterMap : layoutMap
	});
	instance = new Vue({
		router,
		store,
		render: (h) =&gt; h(App)
	}).$mount(&#39;#app&#39;);
}

// 导出子应用生命周期 挂载前
export async function bootstrap() {
	console.log(&#39;[vue] vue app bootstraped&#39;);
}

// 导出子应用生命周期 挂载前 挂载后
export async function mount(props) {
	props.onGlobalStateChange((state) =&gt; {
		store.dispatch(&#39;setRoles&#39;, state.roles);
	}, true);
	console.log(&#39;[vue] props from main framework&#39;, props);
	poweredRender(props);
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
	instance.$destroy();
	instance.$el.innerHTML = &#39;&#39;;
	instance = null;
	router = null;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const packageName = require(&#39;./package.json&#39;).name;

module.exports = {
  output: {
    library: \`\${packageName}-[name]\`,
    libraryTarget: &#39;umd&#39;,
    jsonpFunction: \`webpackJsonp_\${packageName}\`,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目运行" tabindex="-1"><a class="header-anchor" href="#项目运行" aria-hidden="true">#</a> 项目运行</h2>`,28)),i("p",null,[n[1]||(n[1]=e("node版本V16.4.2 ")),i("a",m,[n[0]||(n[0]=e("下载网址")),l(d)])]),n[5]||(n[5]=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装依赖</span>
<span class="token function">npm</span> i 或者 <span class="token function">yarn</span> <span class="token function">install</span>

<span class="token comment">#Compiles and hot-reloads for development</span>
$ <span class="token function">npm</span> run serve // 指令平台
$ <span class="token function">npm</span> run serve:dcpp // 采集平台

<span class="token comment">#Compiles and minifies for production</span>
$ <span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由-动态菜单" tabindex="-1"><a class="header-anchor" href="#动态路由-动态菜单" aria-hidden="true">#</a> 动态路由（动态菜单）</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 后端接口菜单数据结构
[
    {
     	authorities: string, // 菜单权限
      	children: Array&lt;router&gt;// 嵌套路由
     	depth: 1, // 顶部为1，2级 左侧菜单为3，4
     	icon: string, // 菜单图标,
     	id: string,
     	path: string, 
     	resName: string, // 命名路由
     	resType: string, // 菜单类型（按钮、菜单）
     	sort: string, // 菜单顺序
     	url: string, // 跳转地址
	},
	{}
]
// 前端使用的菜单数据结构
[
	{
		children: Array&lt;router&gt;,// 嵌套路由
        component:object,// 路由对应组件，
        meta:{
        	hasRouterChild:Boolean, //是否含有子路由
        	icon:string, // 菜单图标,
        	isLocalRouter:Boolean, //是否为本地路由（skeleton页面)
        	depth: 1, // 顶部为1，2级 左侧菜单为3，4
        	permission: string, // 菜单权限,
        	title: string, // 菜单标题
    	},
    	name: string, // 命名路由
    	path: string, // 菜单路径
    	redirect: string, // 菜单重定向路径
    	sort: string, // 菜单顺序
	}
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地路由配置" tabindex="-1"><a class="header-anchor" href="#本地路由配置" aria-hidden="true">#</a> 本地路由配置</h2><p>本地路由：存放于skeleton-ui页面的路由，即主应用中的页面，目前主要是在字典管理、系统管理下。</p><ul><li><p>在view文件夹中新建对应的组件页面，/utils/menu.js文件中配置path及component</p></li><li><p>菜单管理新增菜单，新增的菜单路径即为/utils/menu.js文件中配置path</p></li></ul><h2 id="工具文档" tabindex="-1"><a class="header-anchor" href="#工具文档" aria-hidden="true">#</a> 工具文档</h2>`,7)),i("p",null,[n[3]||(n[3]=e("webpack-bundle-analyzer ")),l(r,{to:"/posts/docs/webpack-bundle-analyzer.html"},{default:c(()=>n[2]||(n[2]=[e("操作文档")])),_:1,__:[2]})])])}const g=t(o,[["render",p],["__file","qiankun.html.vue"]]);export{g as default};
