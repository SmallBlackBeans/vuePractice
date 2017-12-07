<template>
  <div id="app">
    <my-checkbox v-model="foo" value="some value"></my-checkbox>
    <!-- 
<my-checkbox
  :checked="foo"
  @change="val => { foo = val }"
  value="some value">
</my-checkbox>
     -->
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    //你仍然需要显式声明 checked 这个 prop。
    checked: Boolean,
    // 这样就允许拿 `value` 这个 prop 做其它事了
    value: String
  }
})

</script>
