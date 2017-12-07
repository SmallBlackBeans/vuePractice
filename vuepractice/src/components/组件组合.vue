<!-- prop 向下传递，事件向上传递 -->
<template>
  <div id="childToparent">
    <child message="helloxxx"></child>
    <child my-message="hellonnnn">hanxiaocu</child>
    <br>
    <!-- 动态prop -->
    <input v-model="parentMsg">
    <child v-bind:my-message="parentMsg"></child>
    <span>{{ parentMsg }}</span>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue';
Vue.component('child', {
  props: ['message', 'myMessage'],
  template: `<span>{{ message }} <br/>{{ myMessage }}</span>`,
})

// 自定义验证规则
/*
注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里
诸如 data、computed 或 methods 等实例属性还无法使用
 */
Vue.component('example', {
  props: {
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true
    },
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    },
    //自定义验证函数
    propF: {
      validator: function(value) {
        return value > 10
      }
    }
  }
})

new Vue({
  el: '#childToparent',
})

export default {
  data() {
    return {
      parentMsg: 'nihao',
    }
  }
}

</script>
