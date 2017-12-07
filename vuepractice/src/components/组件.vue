<!-- 
<template>
  <div id="example-2">
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
  </div>
</template>
<script>
import Vue from "vue";
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#example-2'
})

</script>

 -->
<template>
  <div>
    <div id="example">
      <span>nihao</span>
      <my-component>nihao</my-component>
    </div>
    <!-- 内联模板 -->
    <my-checkbox inline-template>
      <div class="checkbox-wrapper" @click="check">
        <div :class="{ checkbox: true, checked: checked }"></div>
        <div class="title">{{ title }}</div>
      </div>
    </my-checkbox>
  </div>
</template>
<script>
// 注意确保在初始化根实例之前注册组件
/*注册一个全局组件*/
import Vue from "vue";
//字符串模板
Vue.component("my-component", {
  template: "<div> A custom component!</div>",
  data() {
    return { checked: false, title: "Check me" };
  },
  methods: {
    check() { this.checked = !this.checked; }
  }
});

//模板字符串
Vue.component("second-component", {
  template: `<div class="checkbox-wrapper" @click="check">
              <div :class="{ checkbox: true, checked: checked }"></div>
              <div class="title">{{ title }}</div>
            </div>`,
  data() {
    return { checked: false, title: "Check me" };
  },
  methods: {
    check() { this.checked = !this.checked; }
  }
});
/*创建 根实例*/
new Vue({
  el: "#example"
});

export default {
  name: "my-component"
};


/* X-Templates*/
Vue.component('my-checkbox', {
  template: '#checkbox-template',
  data() {
    return { checked: false, title: 'Check me' }
  },
  methods: {
    check() { this.checked = !this.checked; }
  }
});

</script>
<!-- html中 -->
<!-- 
X-Templates
<script type="text/x-template" id="checkbox-template">
  <div class="checkbox-wrapper" @click="check">
    <div :class="{ checkbox: true, checked: checked }"></div>
    <div class="title">{{ title }}</div>
  </div>
</script>

 -->
