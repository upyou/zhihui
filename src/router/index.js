import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../views/layout/index.vue'
import Home from '../views/layout/home.vue'
import Cart from '../views/layout/cart.vue'
import User from '../views/layout/user.vue'
import category from '../views/layout/category.vue'

import store from '@/store'

const Search = () => import('../views/search/index.vue')
const SearchList = () => import('../views/search/list.vue')
const Login = () => import('../views/login/index.vue')
const Pay = () => import('../views/pay/index.vue')
const Myorder = () => import('../views/myorder/index.vue')
const Prodetail = () => import('../views/prodetail/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/search', component: Search },
    { path: '/searchlist', component: SearchList },
    { path: '/login', component: Login },
    { path: '/pay', component: Pay },
    { path: '/myorder', component: Myorder },
    { path: '/prodetail/:id', component: Prodetail },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        { path: 'home', component: Home },
        { path: 'cart', component: Cart },
        { path: 'user', component: User },
        { path: 'category', component: category }
      ]
    }
  ]
})

const arrUrl = ['/pay', '/myorder']

router.beforeEach((to, from, next) => {
  if (!arrUrl.includes(to.path)) {
    next()
    return
  }
  const token = store.getters.token
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
