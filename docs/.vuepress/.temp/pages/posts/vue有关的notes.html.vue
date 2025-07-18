<template><div><h1 id="vue有关的notes" tabindex="-1"><a class="header-anchor" href="#vue有关的notes" aria-hidden="true">#</a> vue有关的notes</h1>
<h2 id="create-与activated-的区别" tabindex="-1"><a class="header-anchor" href="#create-与activated-的区别" aria-hidden="true">#</a> create()与activated()的区别</h2>
<ul>
<li>created()：在创建vue对象时，当html渲染之前就触发；但是注意，全局vue.js不强制刷新或者重启时只创建一次，也就是说，created()只会触发一次；</li>
<li>activated()：在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等</li>
</ul>
</div></template>


