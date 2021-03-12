import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { demos } from '@/config/DemoNames'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Demo.vue')
  },
  ...demos.map((d: any) => ({ // FIXME: Replace any with type.
    path: '/' + d.path,
    component: () => import(`@/views/demos/${d.file}.vue`)
  })),
  {
    path: '/collapse',
    component: () => import('@/views/demos/CollapsableToolbarTitle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
