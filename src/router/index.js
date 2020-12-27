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
    path: '/accomplishments',
    name: 'accomplishments',
    component: () => import('../views/Accomplishments.vue'),
    meta: { backgroundImg: 'Accomplishments.jpg' }
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
    path: '/Philosophies',
    name: 'philosophies',
    component: () => import('../views/Philosophies.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
