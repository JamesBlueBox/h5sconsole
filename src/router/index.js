import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/views/dashboard'
import GPU from '@/components/views/dashboard/GPU'
import Device from '@/components/views/dashboard/device'

import Liveview from '@/components/views/liveview'

import Settings from '@/components/views/settings'
import devices from '@/components/views/settings/devices'
import devicesdks from '@/components/views/settings/devicesdks'
import usersettings from '@/components/views/settings/usersetting'
import Regional from '@/components/views/settings/Regional'

import Login from '@/components/login'
import Logout from '@/components/logout'

import Control from '@/components/Control'
import store from '@/store/store'
import * as types from '@/store/types'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/app/dashboard'
  },
  {
    path: '/app',
    name: 'h5s',
    component: H5S,
    children: [
      {
        path: '/app/liveview',
        name: 'liveviewRouter',
        component: Liveview
      },
      {
        path: '/app/GPU',
        name: 'GPURouter',
        component: GPU
      },
      {
        path: '/app/Device',
        name: 'DeviceRouter',
        component: Device
      },
      {
        path: '/app/dashboard',
        name: 'dashboardRouter',
        component: Dashboard
      },
      //样式   管理
      {
        path: '/app/settings',
        name: 'settingsRouter',
        meta: {
          roles: 'admin',
          requireAuth: true
        },
        component: Settings,
        children: [
          //1
          {
            path: '/app/setting/devices',
            name: 'devicesRouter',
            component: devices,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //2
          {
            path: '/app/setting/devicesdks',
            name: 'devicesdksRouter',
            component: devicesdks,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //5
          {
            path: '/app/setting/usersettings',
            name: 'usersettingsRouter',
            component: usersettings,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          },
          //6
          {
            path: '/app/setting/Regional',
            name: 'RegionalRouter',
            component: Regional,
            meta: {
              roles: 'admin',
              requireAuth: true
            }
          }, 
        ]
      },
      {
        path: '/app/logout',
        name: 'logoutRouter',
        component: Logout
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginRouter',
    component: Login
  },
];

// When the page refreshes, reassign token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

if (window.localStorage.getItem('lang')) {
  store.commit(types.LANG, window.localStorage.getItem('lang'))
}

if (window.localStorage.getItem('adswitch')) {
  store.commit(types.ADSWITCH, window.localStorage.getItem('adswitch'))
}

if (window.localStorage.getItem('user')) {
  store.commit(types.USER, window.localStorage.getItem('user'))
}
if (window.localStorage.getItem('root')) {
  store.commit(types.ROOT, window.localStorage.getItem('root'))
}

const Router = new VueRouter({
  routes
});

Router.beforeEach((to, from, next) => {
  if(store.state.root=="Operator"&&to.meta.roles){
    console.log("store.state.root",store.state.root,to.meta.roles)
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
          next()
        } else {
          next({
            path: '/login',
            query: {redirect: to.fullPath}
          })
        }
      } else {
        next();
      }
})

export default Router;
