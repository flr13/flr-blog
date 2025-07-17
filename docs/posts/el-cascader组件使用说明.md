# Element UI Cascader 级联选择器

## 1. 属性（Props）
| 属性名          | 说明                     | 类型     | 默认值 |
| --------------- | ------------------------ | -------- | ------ |
| value/v-model   | 选中项绑定值             | Array    | -      |
| options         | 可选项数据源             | Array    | -      |
| props           | 配置选项                 | Object   | -      |
| size            | 输入框尺寸               | String   | -      |
| placeholder     | 输入框占位文本           | String   | -      |
| disabled        | 是否禁用                 | Boolean  | false  |
| clearable       | 是否支持清空选项         | Boolean  | false  |
| show-all-levels | 是否显示选中值的完整路径 | Boolean  | true   |
| collapse-tags   | 多选模式下是否折叠Tag    | Boolean  | false  |
| separator       | 选项分隔符               | String   | ' / '  |
| filterable      | 是否可搜索选项           | Boolean  | false  |
| filter-method   | 自定义搜索逻辑           | Function | -      |
| debounce        | 搜索关键词输入的去抖延迟 | Number   | 300    |
| before-filter   | 筛选之前的钩子           | Function | -      |
| popper-class    | 自定义浮层类名           | String   | -      |

## 2. 事件（Events）
| 事件名         | 说明                      | 参数          |
| -------------- | ------------------------- | ------------- |
| change         | 当选中节点变化时触发      | value         |
| expand-change  | 当展开节点发生变化时触发  | expandedNodes |
| blur           | 当失去焦点时触发          | -             |
| focus          | 当获得焦点时触发          | -             |
| visible-change | 下拉框出现/隐藏时触发     | visible       |
| remove-tag     | 在多选模式下移除Tag时触发 | tag           |

## 3. 方法（Methods）
| 方法名          | 说明           | 参数                          |
| --------------- | -------------- | ----------------------------- |
| getCheckedNodes | 获取选中的节点 | 是否只是叶子节点（默认false） |

## 4. 插槽（Slots）
| 插槽名 | 说明                   |
| ------ | ---------------------- |
| -      | 自定义备选项的节点内容 |
| empty  | 无匹配选项时的内容     |

## 5. CascaderPanel 属性
| 属性名        | 说明         | 类型   | 默认值 |
| ------------- | ------------ | ------ | ------ |
| value/v-model | 选中项绑定值 | Array  | -      |
| options       | 可选项数据源 | Array  | -      |
| props         | 配置选项     | Object | -      |

## 6. CascaderPanel 事件
| 事件名        | 说明                     | 参数          |
| ------------- | ------------------------ | ------------- |
| change        | 当选中节点变化时触发     | value         |
| expand-change | 当展开节点发生变化时触发 | expandedNodes |

## 7. CascaderPanel 方法
| 方法名            | 说明               | 参数 |
| ----------------- | ------------------ | ---- |
| getCheckedNodes   | 获取选中的节点数组 | -    |
| clearCheckedNodes | 清空选中的节点     | -    |

## 8. Props 配置
| 属性名        | 说明                                                         | 类型     | 默认值     |
| ------------- | ------------------------------------------------------------ | -------- | ---------- |
| expandTrigger | 次级菜单的展开方式                                           | String   | 'click'    |
| multiple      | 是否多选                                                     | Boolean  | false      |
| checkStrictly | 是否严格的遵守父子节点不互相关联                             | Boolean  | false      |
| emitPath      | 在选中节点改变时是否返回由该节点所在的各级菜单的值所组成的数组 | Boolean  | true       |
| lazy          | 是否动态加载子节点                                           | Boolean  | false      |
| lazyLoad      | 加载动态数据的方法                                           | Function | -          |
| value         | 指定选项的值为选项对象的某个属性值                           | String   | 'value'    |
| label         | 指定选项标签为选项对象的某个属性值                           | String   | 'label'    |
| children      | 指定选项的子选项为选项对象的某个属性值                       | String   | 'children' |
| disabled      | 指定选项的禁用为选项对象的某个属性值                         | String   | 'disabled' |
| leaf          | 指定选项的叶子节点的标志位为选项对象的某个属性值             | String   | 'leaf'     |

## 9. 示例用法

### 基础用法
```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    placeholder="请选择"
  ></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

### 禁用选项

```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    placeholder="请选择"
  ></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              disabled: true,
            },
          ],
        },
      ],
    };
  },
};
</script>
```

### 可清空
```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    placeholder="请选择"
    clearable
  ></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

### 多选
```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    placeholder="请选择"
    multiple
  ></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

### 动态加载
```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ lazy: true, lazyLoad }"
    placeholder="请选择"
  ></el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
            },
          ],
        },
      ],
    };
  },
  methods: {
    lazyLoad(node, resolve) {
      // 模拟异步加载
      setTimeout(() => {
        resolve([
          {
            value: 'xihu',
            label: '西湖区',
          },
        ]);
      }, 1000);
    },
  },
};
</script>
```

### 自定义节点内容
```vue
<template>
  <el-cascader
    v-model="value"
    :options="options"
    placeholder="请选择"
    :scoped-slot="{ node, data }"
  >
    <template v-slot="scope">
      <div>{{ scope.node.label }}</div>
    </template>
  </el-cascader>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
            },
          ],
        },
      ],
    };
  },
};
</script>
```

## 10. 总结
Element UI 的 Cascader 组件提供了丰富的功能，包括单选、多选、动态加载、可搜索、自定义节点内容等。通过合理配置属性和事件，可以满足多种复杂的场景需求。