import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contenu from '../components/Contenu.vue'
import Liste from '../components/Liste.vue'
import Home from '../components/home.vue'
import Affichage from '../components/Affichage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/affiche',
      name: 'affiche',
      component: Affichage
    }
  ]
})

export default router
