// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
//调试模式
Vue.config.debug = true;

//路由∏
import router from './router';

//网络加载
import VueResource from 'vue-resource';
Vue.use(VueResource);

import infiniteScroll from 'vue-infinite-scroll';
Vue.use(infiniteScroll);

//饿了么
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  // template: "<App/>",等价于
  render: h => {
    return h(App);
  },
  components: { App }
});
