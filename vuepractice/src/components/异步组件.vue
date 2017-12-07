<template>
  <div id="app">
    <!-- 在 HTML 模板中始终使用 kebab-case -->
    <kebab-cased-component></kebab-cased-component>
    <camel-cased-component></camel-cased-component>
    <pascal-cased-component></pascal-cased-component>
  </div>
</template>
<script type="text/javascript">
import Vue from 'vue'
//工厂方法，异步解析组件定义
Vue.component('async', function(resolve, reject) {
  setTimeout({
      resolve({
        template: '<div>I an async</div> '
      })
    }
  }, 1000)
})

/*高级异步组件*/
/*
当一个异步组件被作为 vue-router 的路由组件使用时，这些高级选项都是无效的，因为在路由切换前就会提前加载所需要的异步组件
 */
const AsyncComp = () => ({
  // 需要加载的组件。应当是一个 Promise
  component: import ('./MyComp.vue'),
  // 加载中应当渲染的组件
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000
})


/*组件命名约定*/
new Vue({
  el: 'app'
  components: {
    // 使用 kebab-case 注册 多横线链接
    'kebab-cased-component': { /* ... */ },
    // 使用 camelCase 注册 驼峰
    'camelCasedComponent': { /* ... */ },
    // 使用 PascalCase 注册  首字母大写
    'PascalCasedComponent': { /* ... */ }
  }
})

</script>
