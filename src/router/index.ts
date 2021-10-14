import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import currencies from '@/pages/currencies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'currencies',
    component: currencies
  },
  {
    path: '/converter',
    name: 'converter',
    component: () => import(/* webpackChunkName: "about" */ '../pages/converter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
