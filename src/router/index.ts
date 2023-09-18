import { RouterView, createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { routeMiddleware } from '@/i18n/translation'

const router = createRouter({
  history: createWebHashHistory(),
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
    },
	 {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: () => { return { name: 'home' } }
    }
  ]
})

export default router
