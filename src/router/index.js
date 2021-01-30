import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: Home
  },
  {
    path: '/Deeds',
    name: 'deeds',
    component: () => import('../views/Deeds.vue'),
    meta: { backgroundImg: 'Deeds.jpg' }
  },
  {
    path: '/Hobbies',
    name: 'hobbies',
    component: () => import('../views/Hobbies.vue')
  },
  {
    path: '/Connect',
    name: 'connect',
    component: () => import('../views/Connect.vue')
  },
  {
    path: '/Ideals',
    name: 'ideals',
    component: () => import('../views/Ideals.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
