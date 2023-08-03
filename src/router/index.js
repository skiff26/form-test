import { createRouter, createWebHashHistory } from 'vue-router'
import FormPage from '../views/FormPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:id?',
      name: 'form',
      component: FormPage,
		meta: { title: 'Ankieta' }
    },
	 {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultPage.vue'),
		meta: { title: 'Result' }
    }
  ]
})

router.beforeEach((to, from, next) => {
	if (to.query.title) {
		document.title = `${ to.query.title }`
	} else {
		document.title = to.meta.title;
	}
	next()
})

export default router