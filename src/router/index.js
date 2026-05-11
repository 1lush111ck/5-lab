import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MostViewedView from '../views/MostView.vue' // Импорт новой страницы

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/most-viewed',
    name: 'most-viewed',
    component: MostViewedView // Путь к новой странице
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router