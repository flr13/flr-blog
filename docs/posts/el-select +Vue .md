---
title: 'el-select +Vue '
date: '2025-07-18'
category: 未分类
tags: []
---
#  可自定义输入的可搜索下拉框

 **描述:** 用户可自定义输入要查询的文件格式，也可根据下拉列表选择文件格式，并且在用户输入的同时，具有搜索功能。 

实现方法： el-select +Vue   

属性说明：https://element.eleme.cn/#/zh-CN/component/select#option-attributes

```vue
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

1. 使用element-ui组件的 el-select标签  并且配置上可搜索属性**filterable** 

2. 给el-select标签手动绑定blur事件，并且手动赋值给el-select标签的v-[model](https://so.csdn.net/so/search?q=model&spm=1001.2101.3001.7020) 

   ```js
   selectBlur(e) {
       this.searchForm.fileExt = e.target.value
       }
   ```

3. 在下拉选项中创建自定义输入值的选项，需要在el-select标签上添加属性**allow-create**，以允许允许用户创建新条目。



可编辑的表格  

http://t.csdnimg.cn/LXXFt

动态嵌套表单验证

http://t.csdnimg.cn/n8dAs



tcp:{

linkParams:{},

galaxyParams:{}

}



]

