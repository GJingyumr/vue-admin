import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'
const publicRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/layout',
    component: () => import('../layout'),
    redirect: '/homepage',
    children: [
      {
        path: '/homepage',
        name: 'homePage',
        component: () => import('../views/home-page')
      }
    ]
  }
]
const privateRoutes = [
  {
    path: '/sys',
    name: 'sys',
    component: layout,
    redirect: '/system/menu',
    children: [
      {
        path: '/system/menu',
        name: 'systemMenu',
        component: () => import('../views/system-menu')
      },
      {
        path: '/system/role',
        name: 'systemRole',
        component: () => import('../views/system-role')
      },
      {
        path: '/system/user',
        name: 'systemUser',
        component: () => import('../views/system-user')
      }
    ]
  },
  {
    path: '/sty',
    name: 'sty',
    component: () => layout,
    children: [
      {
        path: '/tooll/dictionary',
        name: 'toollDictionary',
        component: () => import('../views/tooll-dictionary')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
