import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rules',
    name: 'Pravidla',
    component: function () {
      return import('../views/rules.vue')
    }
  },
  {
    path: '/vip',
    name: 'VIP',
    component: function () {
      return import('../views/vip.vue')
    }
  },
  {
    path: '/gov',
    name: 'Zákony',
    component: function () {
      return import('../views/gov.vue')
    }
  },
  {
    path: '/docs',
    name: 'Docs',
    component: function () {
      return import('../views/Docs.vue')
    }
  },
  
]

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes,
})

export default router