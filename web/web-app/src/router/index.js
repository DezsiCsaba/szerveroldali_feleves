import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from "@/views/LoginForm.vue";
import HomeView from "@/views/HomeView.vue";
import RegisterForm from "@/views/RegisterForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RegisterForm
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/main',
      name: 'main',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
