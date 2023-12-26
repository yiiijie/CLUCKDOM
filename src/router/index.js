import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/home/Home.vue';


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/view/about/About.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("@/view/products/Products.vue"),
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("@/view/stores/Stores.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/view/news/News.vue"),
    },
  ],
});

export default router;