<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navItems = reactive([
    {
        label:'關於我們',
        route: '/about',
    },
    {
        label:'精選商品',
        route: '/products',
    },
    {
        label:'通路門市',
        route: '/stores',
    },
    {
        label:'常見問題',
        route: '/faq',
    },
])
</script>

<template>
    <div>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <RouterLink :to="'/'">
                        <img src="/images/logo/navbar_logo.svg" alt="logo">
                    </RouterLink>
                </div>
                <ul class="header_nav_list">                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink :to="navItem.route" class="nav_link">
                            <span class="label">{{ navItem.label }}</span>                     
                            <span class="circle"></span>
                        </RouterLink>
                    </li>                         
                </ul>         
                <span class="contact_icon">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon"/>
                    <font-awesome-icon :icon="['fab', 'instagram']" 
                    class="icon"/>
                    <router-link to="/contact-us">
                        <font-awesome-icon :icon="['fas', 'envelope']" 
                        class="icon"/>
                    </router-link>
                </span>
            </nav>
        </header>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/layout/navbar';
</style>