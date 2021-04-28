import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.page.vue'
import Source from '../views/Source.page.vue'
import Article from '../views/Article.page.vue'

const routes = [
  
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/source',
    name: 'Source',
    component: Source
  },
  {
    path: '/source/:source',
    name: 'Article',
    component: Article
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
