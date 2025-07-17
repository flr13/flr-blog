dialog 封装为子组件

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
      get () {
        return this.visible
      },
      set (val) {
        // 当visible改变的时候，触发父组件的 updateVisible方法，在该方法中更改传入子组件的 centerDialogVisible的值
        this.$emit('updateVisible', val)
      }
    }
  },
  methods: {
    Cancel () {
      this.$emit('resetPopupData')
    },
    Save () {
      this.$emit('submitPopupData')
    },
    handleClose () {
      this.$emit('handleClose')
    }
  }
}
</script>

```

```vue
父组件使用
<dialog
      :dialogTitle="dialogTitle"
      :visible.sync="dialogVisible"
      @updateVisible="updateVisible"
      @resetPopupData="resetPopupData"
      @submitPopupData="submitPopupData"
      @handleClose="handleClose"
      :popupWidth="'550px'"
    >
      <div style="height:150px;font-size:16px;color:#3c4354;font-family:PingFangSC-Medium;">
        具体的内容
      </div>
</dialog>
	dialogVisible: false, // 弹框的出现与否
    dialogTitle: '通过', // 标题

	// 修改是否让页面显示与隐藏的事件
	updateVisible (val) {
      this.dialogVisible = val
    },
    // 点击取消的事件
    resetPopupData () {
      //  这里可重置数据
      this.dialogVisible = false
    },
    // 点击确定的按钮
    async submitPopupData () {
      this.dialogVisible = false
    },
    // 关闭弹框（头部的X）
    handleClose () {
      this.dialogVisible = false
    }

```

