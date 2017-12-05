<template>
  <div id="example">
    <my-component></my-component>
  </div>
</template>
<script>
/*创建一个 Vue 实例*/
new Vue({
  el: '#example'
})

/*注册一个全局组件*/
Vue.component('my-component', {

})

</script>
