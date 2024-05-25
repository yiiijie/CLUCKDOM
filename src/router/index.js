import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/home/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/view/about/About.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('@/view/products/Products.vue'),
    },
    {
        path: '/products-details/:productId',
        name: 'products-details',
        component: () => import('@/view/products-details/ProductsDetails.vue'),
    },
    {
        path: '/physical-channel',
        name: 'physical-channel',
        component: () => import('@/view/physical-channel/PhysicalChannel.vue'),
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('@/view/sign-in/SignIn.vue'),
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('@/view/sign-up/SignUp.vue'),
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import('@/view/contact-us/ContactUs.vue'),
    },
]

// 處理路由切換時的行為
const scrollBehavior = (to, from, savedPosition) => {
    return (
        // 使用瀏覽器的上一頁&下一頁時，返回savedPosition（原停留位置）。
        savedPosition ||
        // 200 毫秒後滾動到頁面頂部
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 200)
        })
    )
}

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior,
})

export default router
