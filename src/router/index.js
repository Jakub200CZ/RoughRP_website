import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pravidla',
    name: 'Pravidla',
    component: function () {
      return import('../views/pravidla.vue')
    }
  },
  {
    path: '/ovladani',
    name: 'Ovládání',
    component: function () {
      return import('../views/ovladani.vue')
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
