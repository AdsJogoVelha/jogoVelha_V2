import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/fsdfs',
      component: dsf
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/cadastro_usuario/index.html',
      component: Cadastro_usuario
    }
  ]
})
