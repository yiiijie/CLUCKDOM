<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue';
import SignInBtn from '@/components/global/SignInBtn.vue';
import CartBtn from '@/components/global/CartBtn.vue';

const router = useRouter();
const isHomePage = ref(true);

watchEffect(() => {
  isHomePage.value = router.currentRoute.value.name === 'home';
});



const navItems = reactive([
    {
        label:'關於我們',
        label_en:'ABOUT US',
        route: '/about',
    },
    {
        label:'精選商品',
        label_en:'PRODUCTS',
        route: '/products',
    },
    {
        label:'通路門市',
        label_en:'STORES',
        route: '/stores',
    },
    {
        label:'最新消息',
        label_en:'NEWS',
        route: '/news',
    },
])

const social = reactive([
    {
        class:'fb',
        link:'',
        icon:['fab', 'facebook-f'],
    },
    {
        class:'ig',
        link:'',
        icon:['fab', 'instagram'],
    },
])

</script>

<template>
    <HeaderCarousel v-if="isHomePage"/>
    <div class="header_btn_list">
        <SignInBtn/>
        <CartBtn/>
    </div>
    <header>
        <div class="header_inner">
            <div class="header_logo">
                <RouterLink :to="'/'">
                    <img src="/images/home/header/logo_red.svg" alt="logo">
                </RouterLink>
            </div>
            <nav class="header_nav">
                <ul class="header_nav_list">                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink :to="navItem.route" class="nav_link">
                            <span class="label">{{ navItem.label }}</span>
                            <br>
                            <span class="label_en">{{ navItem['label_en'] }}</span>
                            <span class="circle"></span>
                        </RouterLink>
                    </li>                         
                </ul>         
            </nav>

            <div class="contact_icon">
                <div class="email">
                    <a href="#">
                        <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'envelope']" />
                    </a>
                </div>
                <div class="social">
                    <div v-for="item in social" :key="item.index" :class="item.class">
                        <a :href="item.link">
                            <font-awesome-icon
                            class="icon"
                            :icon="item.icon" />
                        </a>
                    </div>                
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/header';
</style>