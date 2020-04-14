import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   redirect: '/home'
  // },
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/Cinema')
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import('../views/Explore')
  },
  {
    path: '/tv',
    name: 'tv',
    component: () => import('../views/TV')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/Chart')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/Review')
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('../views/Tag')
  },
  {
    path: '/subject/:id',
    name: 'subject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Subject.vue')
  },
  {
    path: '/search?text=:text',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
