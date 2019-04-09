import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Layout',
			component: () => import('./views/Layout.vue'),
			children: [
				{
					path: '/home',
					alias: '/',
					components: {main: () => import('./views/Home.vue')},
				},
				{
					path: '/about',
					name: 'about',
					components: {main: () => import('./views/About.vue')},
				}
			]
		}
	]
})
