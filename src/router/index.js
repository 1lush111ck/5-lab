import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/most-viewed',
    name: 'most-viewed',
    component: () => import('../views/MostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router