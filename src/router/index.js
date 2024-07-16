import { createRouter, createWebHistory } from 'vue-router'
// TODO: Importar las vistas necesarias

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // TODO: Definir las rutas para Home, Shop y Cart
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    }*/
  ]
})

export default router