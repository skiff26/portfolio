import { RouterView, createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { routeMiddleware } from '@/i18n/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
		path: '/:locale?',
		component: RouterView,
		beforeEnter: routeMiddleware,
		children: [
			{
				path: '',
				name: 'home',
				component: HomeView
			}
		]
    }
  ]
})

export default router
