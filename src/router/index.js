import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Despesas from '../views/Despesas.vue'
import Receitas from '../views/Receitas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/despesas',
    name: 'despesas',
    component: Despesas
  },
  {
    path: '/receitas',
    name: 'Receitas',
    component: Receitas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
