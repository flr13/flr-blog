---
title: vue_form_add
date: '2025-07-18'
category: ui-组件
tags: []
---
```vue
 
vue add 任意一条数据
<el-form ref="form" :rules="formRules" :inline="true" :model="form" label-width="80px">
        <div v-for="(item, index) in form.dynamicItem" :key="index">
          <el-form-item
            label="姓名"
            :prop="'dynamicItem.' + index + '.name'"
            :rules="{
            required: true, message: '姓名不能为空', trigger: 'blur'
        }"
          >
            <el-input v-model="item.name"></el-input>
          </el-form-item>
          <el-form-item
            label="手机号"
            :prop="'dynamicItem.' + index + '.phone'"
            :rules="[
             {required: true, message: '手机号不能为空', trigger: 'blur'},
              { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
          ]"
          >
            <el-input v-model="item.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-if="index+1 == form.dynamicItem.length" @click="addItem" type="primary">增加</el-button>
            <el-button v-if="index !== 0" @click="deleteItem(item, index)" type="danger">删除</el-button>
          </el-form-item>
        </div>
      </el-form>


form: {
        dynamicItem: [
          {
            name: "",
            phone: ""
          }
        ]
      },


 addItem() {
      this.form.dynamicItem.push({
        name: "",
        phone: ""
      });

 deleteItem(item, index) {
      this.form.dynamicItem.splice(index, 1);
      console.log(this.form.dynamicItem, "删除");
    },

```

```vue
						<template v-if="colItem.type === 'select'">
									<el-select
										v-model="scope.row[colItem.prop]"
										:placeholder="`请选择${colItem.label}`"
									>
										<el-option
											v-for="option in colItem.options"
											:key="option.value"
											:label="option.label"
											:value="option.value"
										/>
									</el-select>
								</template>
								<template v-else-if="colItem.type === 'textarea'">
									<el-input
										type="textarea"
										v-model="scope.row[colItem.prop]"
										:placeholder="`请输入${colItem.label}`"
									/>
								</template>
								<el-input
									v-else
									clearable
									v-model="scope.row[colItem.prop]"
									:placeholder="`请输入${colItem.label}`"
								></el-input>
```

