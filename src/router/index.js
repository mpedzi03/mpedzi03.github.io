import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { backgroundImg: 'Home.jpg' }
  },
  {
    path: '/accomplishments',
    name: 'accomplishments',
    component: () => import('../views/Accomplishments.vue'),
    meta: { backgroundImg: 'Accomplishments.jpg' }
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: () => import('../views/Hobbies.vue'),
    meta: { backgroundImg: 'Hobbies.jpg' }
  },
  {
    path: '/Connect',
    name: 'Connect',
    component: () => import('../views/Connect.vue'),
    meta: { backgroundImg: 'Connect.jpg' }
  },
  {
    path: '/Philosophies',
    name: 'Philosophies',
    component: () => import('../views/Philosophies.vue'),
    meta: { backgroundImg: 'Philosophies.jpg' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
