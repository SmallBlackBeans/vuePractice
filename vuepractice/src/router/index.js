import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Header from '@/components/header'

import Transitionanimation from '@/components/transitionAnimation'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Transitionanimation',
      name: 'Transitionanimation',
      component: Transitionanimation
    }
  ]
})
