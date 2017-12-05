<template>
  <div id="example">
    <my-component></my-component>
  </div>
</template>
<script>
// 注意确保在初始化根实例之前注册组件
/*注册一个全局组件*/
import Vue from '../node_modules/vue/dist/vue.min'
Vue.component('my-component', {
  template: '<div> A custom component!</div>'
})
/*创建 根实例*/
new Vue({
  el: '#example'
})

</script>
