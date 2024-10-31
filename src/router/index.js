import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/how-do-we-do',
      name: 'howWeDo',
      component: () => import('../views/HowWeView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/why-runcode',
      name: 'whyRuncode',
      component: () => import('../views/WhyRuncodeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)*', // pathMatch captura cualquier ruta no definida
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router