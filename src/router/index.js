import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contenu from '../components/Contenu.vue'
import Liste from '../components/Liste.vue'
import Home from '../components/home.vue'
import Affichage from '../components/Affichage.vue'
import ArticleForm from '../components/ArticleForm.vue'
import ShowArticle from '../components/showArticle.vue'
import ModifForm from '../components/Modif.vue'
import Convert from '../components/Convert.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/convert',
      name: 'convert',
      component: Convert
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/affiche',
      name: 'affiche',
      component: Affichage
    },
    {
      path: '/articleForm',
      name: 'articleForm',
      component: ArticleForm
    },
    {
      path: '/showArticle/:id/edit',
      name: 'showArticle',
      component: ShowArticle
    },
    {
      path: '/modifArticle/:id',
      name: 'modif',
      component: ModifForm
    },

  ]
})

export default router
