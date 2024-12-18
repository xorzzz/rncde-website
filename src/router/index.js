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
      name: 'howDo',
      component: () => import('../views/HowWeView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/why-us',
      name: 'whyUs',
      component: () => import('../views/WhyRuncodeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },

    {
      path: '/legal',
      children: [
        {
          path: 'terms',
          name: 'terms',
          component: () => import('../views/TermsView.vue')
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: () => import('../views/PolicesView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
