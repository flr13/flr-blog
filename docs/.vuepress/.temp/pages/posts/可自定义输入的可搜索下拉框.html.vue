<template><div><h1 id="可自定义输入的可搜索下拉框" tabindex="-1"><a class="header-anchor" href="#可自定义输入的可搜索下拉框" aria-hidden="true">#</a> 可自定义输入的可搜索下拉框</h1>
<p><strong>描述:</strong> 用户可自定义输入要查询的文件格式，也可根据下拉列表选择文件格式，并且在用户输入的同时，具有搜索功能。</p>
<p>实现方法： el-select +Vue</p>
<p>属性说明：https://element.eleme.cn/#/zh-CN/component/select#option-attributes</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstClsf<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstClsf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>100%</span><span class="token punctuation">"</span></span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>caseList.firstClsf<span class="token punctuation">"</span></span>
       <span class="token attr-name">allow-create</span>
        <span class="token attr-name">clearable</span>
        <span class="token attr-name">filterable</span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectBlur<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span>
           <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in firstClsfGroups<span class="token punctuation">"</span></span>
           <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.groupName<span class="token punctuation">"</span></span>
           <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
           <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
         <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p>使用element-ui组件的 el-select标签  并且配置上可搜索属性<strong>filterable</strong></p>
</li>
<li>
<p>给el-select标签手动绑定blur事件，并且手动赋值给el-select标签的v-<a href="https://so.csdn.net/so/search?q=model&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">model<ExternalLinkIcon/></a></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">selectBlur</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>searchForm<span class="token punctuation">.</span>fileExt <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在下拉选项中创建自定义输入值的选项，需要在el-select标签上添加属性<strong>allow-create</strong>，以允许允许用户创建新条目。</p>
</li>
</ol>
<p>可编辑的表格</p>
<p>http://t.csdnimg.cn/LXXFt</p>
<p>动态嵌套表单验证</p>
<p>http://t.csdnimg.cn/n8dAs</p>
<p>tcp:{</p>
<p>linkParams:{},</p>
<p>galaxyParams:{}</p>
<p>}</p>
<p>]</p>
</div></template>


