import Vue from 'vue'
import VueRouter from 'vue-router'
import F from '../views/First.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: F
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
