---
title: dialog
date: '2025-07-18'
category: ui-组件
tags: []
---

# dialog 封装为子组件

### 子组件代码
#### 文件名：`Dialog.vue`

```vue
<template>
  <!-- 封装弹框 -->
  <div class="popup">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :width="popupWidth"
      :before-close="handleClose"
    >
      <slot>
        <p>弹框自定义的内容</p>
      </slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Cancel">取 消</el-button>
        <el-button type="primary" @click="Save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'CustomDialog',
  props: {
    dialogTitle: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    },
    popupWidth: {
      type: String,
      default: '550px'
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        // 当visible改变的时候，触发父组件的 updateVisible方法，在该方法中更改传入子组件的 centerDialogVisible的值
        this.$emit('update:visible', val);
      }
    }
  },
  methods: {
    Cancel() {
      this.$emit('resetPopupData');
    },
    Save() {
      this.$emit('submitPopupData');
    },
    handleClose() {
      this.$emit('handleClose');
    }
  }
};
</script>

<style scoped>
.popup {
  /* 可以根据需要添加样式 */
}
</style>
```

### 父组件代码
#### 文件名：`ParentComponent.vue`

```vue
<template>
  <div>
    <button @click="openDialog">打开弹框</button>
    <CustomDialog
      :dialogTitle="dialogTitle"
      v-model:visible="dialogVisible"
      @resetPopupData="resetPopupData"
      @submitPopupData="submitPopupData"
      @handleClose="handleClose"
      :popupWidth="'550px'"
    >
      <div style="height:150px;font-size:16px;color:#3c4354;font-family:PingFangSC-Medium;">
        具体的内容
      </div>
    </CustomDialog>
  </div>
</template>

<script>
import CustomDialog from './Dialog.vue';

export default {
  name: 'ParentComponent',
  components: {
    CustomDialog
  },
  data() {
    return {
      dialogVisible: false, // 弹框的出现与否
      dialogTitle: '通过', // 标题
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    // 修改是否让页面显示与隐藏的事件
    updateVisible(val) {
      this.dialogVisible = val;
    },
    // 点击取消的事件
    resetPopupData() {
      //  这里可重置数据
      this.dialogVisible = false;
    },
    // 点击确定的按钮
    async submitPopupData() {
      this.dialogVisible = false;
    },
    // 关闭弹框（头部的X）
    handleClose() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
/* 根据需要添加样式 */
</style>
```

### 说明
1. **子组件 (`Dialog.vue`)**：
   - 使用了 `el-dialog` 组件（Element UI 的弹框组件）。
   - 通过 `props` 接收标题、是否显示、宽度等参数。
   - 使用了 `v-model:visible` 来实现双向绑定，方便父组件控制弹框的显示与隐藏。
   - 提供了 `Cancel`、`Save` 和 `handleClose` 方法，分别用于取消、保存和关闭弹框。

2. **父组件 (`ParentComponent.vue`)**：
   - 使用了 `CustomDialog` 子组件，并通过 `v-model:visible` 控制弹框的显示与隐藏。
   - 提供了 `openDialog` 方法来打开弹框。
   - 实现了 `resetPopupData`、`submitPopupData` 和 `handleClose` 方法，用于处理弹框的取消、保存和关闭事件。

3. **样式**：
   - 样式可以根据实际需求进行调整。


