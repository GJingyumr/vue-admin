import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '/homepage',
        name: 'homePage',
        component: () => import('../views/home-page')
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: Layout,
    redirect: '/system',
    children: [
      {
        path: '/system',
        name: 'system',
        component: () => import('../views/system'),
        redirect: '/system/user',
        children: [
          {
            path: '/system/user',
            name: 'stystemUser',
            component: () => import('../views/system-user'),
            meta: {
              title: '用户管理'
            }
          },
          {
            path: '/system/role',
            name: 'stystemRole',
            component: () => import('../views/system-role'),
            meta: {
              title: '角色管理'
            }
          },
          {
            path: '/system/menu',
            name: 'stystemMenu',
            component: () => import('../views/system-menu'),
            meta: {
              title: '菜单管理'
            }
          }
        ]
      }
    ]
  },

  {
    path: '/tooll',
    name: 'tooll',
    component: () => import('../views/tooll'),
    redirect: '/tooll/dictionary',
    children: [
      {
        path: '/tooll/dictionary',
        name: 'toollDictionary',
        component: () => import('../views/tooll-dictionary'),
        meta: {
          title: '数字字典'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
