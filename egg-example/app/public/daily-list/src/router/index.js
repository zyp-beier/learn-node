import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'signIn',
      component: () => import('../views/signIn')
    },
    {
      path: '/dailyList',
      name: 'dailyList',
      component: () => import('../views/DailyList/dailyList'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/DailyList/detail'),
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
