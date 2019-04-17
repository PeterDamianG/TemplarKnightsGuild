import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/juegos',
      name: 'juegos',
      component: () => import(/* webpackChunkName: "juegos" */ './views/Juegos.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpackChunkName: "contacto" */ './views/Contacto.vue')
    }
  ]
})
