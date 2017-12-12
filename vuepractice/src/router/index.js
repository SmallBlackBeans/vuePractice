import Vue from 'vue';
import Router from 'vue-router';

import Transitionanimation from '@/components/transitionAnimation';
import Index from '@/components/index';
import Header from '@/components/header';

import GoodsList from '@/views/GoodsList';
import HelloWorld from '@/views/HelloWorld';
import Detail from '@/views/Detail';

Vue.use(Router);

export default new Router({
  mode: 'history', //不在使用hash 路由，就是不再使用#

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        //嵌套路由
        {
          path: 'header',
          name: 'header',
          component: Header
        }
      ]
    },
    {
      path: '/Transitionanimation',
      name: 'Transitionanimation',
      component: Transitionanimation
    },
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
});
