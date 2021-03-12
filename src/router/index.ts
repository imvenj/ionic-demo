import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { demos } from '@/config/DemoNames'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        children: [
          {
            path: 'sample',
            component: () => import('@/views/Sample.vue')
          },
          {
            path: 'demo',
            component: () => import('@/views/Demo.vue'),
            children: demos.map((d: any) => ({ // FIXME: Replace any with type.
              path: d.path,
              component: () => import(`@/views/demos/${d.file}.vue`)
            }))
          }
        ]
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
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
