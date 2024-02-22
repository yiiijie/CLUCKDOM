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
      path: "/products/details",
      name: "details",
      component: () => import("@/view/products/details/Details.vue"),
      meta: {
        hideHeader: false,
        hideFooter: false,
      },
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
    {
      path: "/sign-in",
      name: "sign-in",
      component: () => import("@/view/sign-in/SignIn.vue"),
      meta: {
        hideHeader: true,
        hideFooter: true,
      },
    },
  ],

  // 處理路由切換時的行為
  scrollBehavior(to, from, savedPosition) {
    return (
      // 使用瀏覽器的上一頁&下一頁時，返回savedPosition（原停留位置）。
      savedPosition ||
      // 頁面置頂
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0 });
        }, 200);
      })
    );
  },
});

export default router;