import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: require('../components/Hello')
    },
    {
      path: '/',
      name: 'about',
      component: require('../components/About')
    },
    {
      path: '/btn',
      name: 'qui-btn',
      component: require('../components/quiButton')
    },
    {
      path: '/quiBtn',
      name: 'pageQuiButton',
      component: require('../pages/pageQuiButton')
    },
    {
      path: '/nav',
      name: 'qui-nav',
      component: require('../components/quiNav')
    },
    {
      path: '/list',
      name: 'qui-list',
      component: require('../components/quiList')
    },
    {
      path: '/arrow',
      name: 'qui-arrow',
      component: require('../components/quiArrow')
    },
    {
      path: '/quiList',
      name: 'pageQuiList',
      component: require('../pages/pageQuiList')
    },
    {
      path: '/quiExp',
      name: 'qui-exp',
      component: require('../pages/pageQuiExample')
    },
    {
      path: '/quiApi',
      name: 'qui-api',
      component: require('../pages/pageQuiTestApi')
    },
    {
      path: '/quiExp/quiAnimate',
      name: 'qui-animate',
      component: require('../pages/pageQuiAnimate')
    },
    {
      path: '/quiTodo',
      name: 'qui-todo',
      component: require('../pages/todolist')
    }
  ]
})
