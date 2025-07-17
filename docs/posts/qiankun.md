# QIANKUN-TEMPLATE

本项目采用 vue + qiankun 实践微前端落地。
同时 qiankun 是一个开放式微前端架构，支持当前三大前端框架甚至 jq 等其他项目无缝接入。
此项目为了尽可能的简单易上手，以及方便文章讲解，大部分逻辑都在主应用和子应用的 main.js 来回施展


## 微前端主功能

---

* 微前端主应用与子应用构建

* 全局状态控制

* 主应用和子应用之间动态通信

* 主应用资源下发至子应用

* 各应用间路由基础管理

* 公共资源处理

  

项目架构

---

以上下天地布局为标准，粉红色是基座，只负责头部导航，绿色是挂载的整个子应用，点击头部导航可切换子应用

![qiankun](docs/assets/layout.png)


## 什么是微前端

---

>Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently.
微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。


微前端 是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立开发、独立部署。

微前端的核心价值：

* 技术栈无关
* 独立开发
* 独立部署

## QIANKUN

---

QIANKUN 是基于 Single-SPA ，提供了更加开箱即用的 API （ single-spa + sandbox + import-html-entry ）

![qiankun](docs/assets/qiankun.png)

### 主应用

```bash
$ yarn add qiankun # 或者 npm i qiankun -S
```

1、在主应用中注册微应用， 当微应用信息注册完之后，一旦浏览器的 url 发生变化，便会自动触发 qiankun 的匹配逻辑，所有 activeRule 规则匹配上的微应用就会被插入到指定的 container 中，同时依次调用微应用暴露出的生命周期钩子。 

```
import { registerMicroApps } from 'qiankun';

export function registerApps(microApps) {
	registerMicroApps(microApps, {
		// eslint-disable-next-line no-unused-vars
		beforeLoad: (app) => {},
		// eslint-disable-next-line no-unused-vars
		beforeMount: [(app) => {}],
		// eslint-disable-next-line no-unused-vars
		afterMount: [(app) => {}],
		// eslint-disable-next-line no-unused-vars
		afterUnmount: [(app) => {}]
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
```

2、菜单管理中配置菜单信息，菜单url为"/对应子应用的activeRule/嵌入的子应用对应页面路由"，例如当前嵌入子应用egcip-dcpp-alarm-ui中的告警任务运行监控页面，新建菜单的信息如下图所示![qiankun](docs/assets/template-menu.png)

### 子应用

1、子应用不需要额外安装任何其他依赖即可接入 qiankun 主应用。 子应用需要在自己的入口 js (通常就是你配置的 webpack 的 entry js) 导出 `bootstrap`、`mount`、`unmount` 三个生命周期钩子，以供主应用在适当的时机调用。 

```
function poweredRender(props = {}) {
	const { activeRule, access_token, enumValue } = props;
	router = new VueRouter({
		mode: 'history',
		base: window.__POWERED_BY_QIANKUN__ ? activeRule : '/',
		routes: window.__POWERED_BY_QIANKUN__ ? constantRouterMap : layoutMap
	});
	instance = new Vue({
		router,
		store,
		render: (h) => h(App)
	}).$mount('#app');
}

// 导出子应用生命周期 挂载前
export async function bootstrap() {
	console.log('[vue] vue app bootstraped');
}

// 导出子应用生命周期 挂载前 挂载后
export async function mount(props) {
	props.onGlobalStateChange((state) => {
		store.dispatch('setRoles', state.roles);
	}, true);
	console.log('[vue] props from main framework', props);
	poweredRender(props);
}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
	instance.$destroy();
	instance.$el.innerHTML = '';
	instance = null;
	router = null;
}
```

2、 除了代码中暴露出相应的生命周期钩子之外，为了让主应用能正确识别微应用暴露出来的一些信息，微应用的打包工具需要增加如下配置： 

```
const packageName = require('./package.json').name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

## 项目运行

node版本V16.4.2    [下载网址](https://nodejs.org/en/download/)

```bash
#安装依赖
npm i 或者 yarn install

#Compiles and hot-reloads for development
$ npm run serve // 指令平台
$ npm run serve:dcpp // 采集平台

#Compiles and minifies for production
$ npm run build
```



## 动态路由（动态菜单）

```
// 后端接口菜单数据结构
[
    {
     	authorities: string, // 菜单权限
      	children: Array<router>// 嵌套路由
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
		children: Array<router>,// 嵌套路由
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
```

## 本地路由配置

本地路由：存放于skeleton-ui页面的路由，即主应用中的页面，目前主要是在字典管理、系统管理下。

* 在view文件夹中新建对应的组件页面，/utils/menu.js文件中配置path及component![qiankun](docs/assets/router.png)

  

* 菜单管理新增菜单，新增的菜单路径即为/utils/menu.js文件中配置path

  ![qiankun](docs/assets/menu-add.png)



## 工具文档

webpack-bundle-analyzer [操作文档](./docs/webpack-bundle-analyzer.md)

