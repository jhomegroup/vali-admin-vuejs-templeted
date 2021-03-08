import Vue from 'vue'
import Router from 'vue-router'
import Apps from '@/views/Apps'
import Login from '@/views/Auth/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
