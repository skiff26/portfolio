import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(),
	routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
	},
	{
	  path: '/works',
	  name: 'works',
	  component: () => import('../views/WorksView.vue')
	},
    {
      path: '/work/:id',
      name: 'work',
      component: () => import('../views/WorkView.vue')
    },
  ]
})

export default router
