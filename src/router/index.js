import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	// history: createWebHistory(import.meta.env.BASE_URL),
	history: createWebHashHistory(),
	routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
		meta: { title: 'About me' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
		meta: { title: 'Contact' }
	},
	{
	  path: '/works',
	  name: 'works',
	  component: () => import('../views/WorksView.vue'),
	  meta: { title: 'Works' }
	},
    {
      path: '/work/:id',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
		meta: { title: `Project` }
    },
  ]
})

router.beforeEach((to, from, next) => {
	if (to.query.title) {
		document.title = `${ to.query.title }`
	} else {
		document.title = `Artem Kulchytskyi - ${to.meta.title}`;
	}
	next()
})

export default router
