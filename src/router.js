
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: () => import('@/views/login') },
    { name: 'layout',
      path: '/',
      component: () => import('@/views/layout/tabBar-layout'),
      children: [{ name: 'home', path: '/', component: () => import('@/views/home/home') }]
    }

  ]
})
export default router
