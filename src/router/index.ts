import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { demos } from '@/config/DemoNames'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Demo.vue')
  },
  ...demos.map((d: any) => ({ // FIXME: Replace any with type.
    path: d.path === 'tabs' ? `/${d.path}/` : '/' + d.path,
    component: () => import(`@/views/demos/${d.file}.vue`),
    children: d.path === 'tabs' ? [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/demos/tabs/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/demos/tabs/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/demos/tabs/Tab3.vue')
      }
    ] : []
  })),
  {
    path: '/tabs/',
    component: () => ('@/views/demos/Tabs.vue'),
  },
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
