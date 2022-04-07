import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
  

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: ':id',
    component: function() {
      return import('../components/Boardcomponent')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
    },
  },
  {
      path: '/board',
      name: 'board',
      component: function() {
        return import(/* webpackChunkName: "board" */ '../views/BoardView.vue')
      },
      children: [
      { path: ':id',
        component: function () {
          return import(/* webpackChunkName: "page" */ '../components/Boardcomponent') }
      }
    ]
    },
    {
    path: '/userinfo/:user',
    name: 'userinfo',
    component: function () {
      return import(/* webpackChunkName: "userinfo" */ '../views/UserView.vue')
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
