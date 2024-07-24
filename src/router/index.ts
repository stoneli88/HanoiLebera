import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'chooseSeat'
    }
  },
  {
    name: 'chooseSeat',
    path: '/chooseSeat',
    component: () => import('@/view/seat/index.vue'),
    meta: {
      title: 'Choose your seat'
    }
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  const title = to?.meta?.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router
