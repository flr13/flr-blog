---
title: 'el-select +Vue '
date: '2025-07-18'
category: ui-组件
tags: []
---

# Vue中Element UI组件扩展

## 1. 可自定义输入的可搜索下拉框实现
通过 Vue 和 Element UI 的 `el-select` 组件实现可自定义输入的可搜索下拉框。

### 1.1 实现方法
- 使用 `el-select` 标签。
- 配置 `filterable` 属性以启用搜索功能。
- 添加 `allow-create` 属性允许用户创建新条目。
- 绑定 `blur` 事件以处理用户输入。

### 1.2 代码示例
```html
<el-form-item :label="firstClsf" prop="firstClsf">
  <el-select
    style="width:100%"
    v-model="caseList.firstClsf"
    allow-create
    clearable
    filterable
    @blur="selectBlur"
  >
    <el-option
      v-for="item in firstClsfGroups"
      :label="item.groupName"
      :key="item.id"
      :value="item.id"
    ></el-option>
  </el-select>
</el-form-item>
```

### 1.3 事件处理
```javascript
selectBlur(e) {
  this.searchForm.fileExt = e.target.value;
}
``` 
- **参考链接**：[Element UI 官方文档 - el-select](https://element.eleme.io/#/zh-CN/component/select)


## 2. 可编辑的表格
可编辑表格允许用户直接在表格单元格中进行数据的编辑、添加和删除操作。这种表格通常用于数据管理场景，例如用户信息管理、订单管理等。

- **技术实现**：使用 Vue.js 和 Element UI 的 `el-table` 组件。
- **功能特点**：
  - 单元格内直接编辑数据。
  - 动态添加和删除行。
  - 支持多种输入类型（如文本、日期选择器等）。

- **参考链接**：[可编辑的表格实现](http://t.csdnimg.cn/LXXFt)

## 3. 动态嵌套表单验证
动态嵌套表单验证是指在表单中嵌套多个子表单，并且这些子表单的验证规则可以根据用户操作动态变化。这种功能在复杂表单场景中非常有用，例如多级表单、动态添加表单项等。

- **技术实现**：使用 Vue.js 和 Element UI 的表单验证功能。
- **功能特点**：
  - 动态添加和删除表单项。
  - 每个表单项支持独立的验证规则。
  - 实时反馈验证结果。

- **参考链接**：[动态嵌套表单验证实现](http://t.csdnimg.cn/n8dAs)

---


