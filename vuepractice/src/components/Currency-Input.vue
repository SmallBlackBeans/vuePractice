<!-- 自定义事件的表单输入组件 -->
<template>
  <div>
    <currency-input v-model="price"></currency-input>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('currency-input', {
  template: `
   <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
    `,
  props: ['value'],
  methods: {
    updateValue(value) {
      var formatterdValue = value
        //删除两端的空格
        .trim()
        //保留两位小数
        .slice(0, value.indexOf('.') === -1 ?
          value.length :
          value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formatterdValue !== value) {
        this.$refs.input.value = formatterdValue
      }
      //通过input 事件带出数值
      this.$emit('input', Number(formatterdValue))
    }
  }
})

</script>
