import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/Cart.vue'
import AboutView from '../views/About.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
  ]
})

export default router
