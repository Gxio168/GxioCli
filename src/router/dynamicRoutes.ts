import type { unionRoutes } from './interface'

const layout = () => import('@/layout/index.vue')

/**
 *  如果只有唯一孩子，给唯一孩子一个 icon(作为显示图标)
 *  多个孩子， 则给每一个孩子一个图标
 */
export const dynamicRoutes: Array<unionRoutes> = [
  {
    path: '/role',
    component: layout,
    redirect: '/role/admin',
    name: 'Role',
    meta: { title: '权限管理', icon: 'menu' },
    children: [
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/role/adminPage/index.vue'),
        meta: { title: '管理员界面', icon: 'Avatar' }
      },
      {
        path: 'editor',
        name: 'Editor',
        component: () => import('@/views/role/editorPage/index.vue'),
        meta: { title: '用户界面', icon: 'UserFilled' }
      },
      {
        path: 'btn',
        name: 'Btn',
        component: () => import('@/views/role/btnPage/index.vue'),
        meta: { title: '按钮权限', icon: 'tools' }
      }
    ]
  }
]
