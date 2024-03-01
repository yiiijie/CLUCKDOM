<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue';
import SignInBtn from '@/components/global/SignInBtn.vue';
import CartBtn from '@/components/global/CartBtn.vue';

const router = useRouter();
const isHomePage = ref(true);
const isOpen = ref(false);

// 手機版 漢堡開關
const hamburgerBtn = () => {
    isOpen.value = !isOpen.value;
}

// 手機版 漢堡點選 -> 跳轉頁面
const closeNavAndNavigate = (route) => {
  isOpen.value = false; // 關閉導覽列
  router.push(route); // 並跳轉至當前點擊頁面
};

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
        label:'常見問題',
        label_en:'FAQ',
        route: '/faq',
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
    <!-- 登入的入口按鈕 & 購物車(功能尚未) -->
    <div class="header_btn_list">
        <SignInBtn/>
        <CartBtn/>
    </div>

    <!-- 手機版漢堡 & menu --> 
    <div class="mobile_menu">
        <button @click="hamburgerBtn" class="hamburger_button">
            <div v-if="!isOpen">
                <font-awesome-icon icon="bars" class="icon" />
                <span class="text">MENU</span>
            </div>
            <div v-else>
                <font-awesome-icon icon="xmark" class="icon"/>
                <span class="text">CLOSE</span>
            </div>
        </button>

        <transition name="slide">
            <div v-if="isOpen" class="menu_open">
                <ul class="menu_list">
                    <!-- 首頁的連結只在手機/平板顯示 -->
                    <li class="mobile_home_lick">
                        <RouterLink to="/" class="nav_link" @click="closeNavAndNavigate('/')">
                            <font-awesome-icon icon="circle-right" class="arrow"/>
                            <span class="label">首頁</span>
                            <span class="label_en">HOME</span>
                        </RouterLink>
                    </li>
                    <!-- 與桌機共用的導覽列項目 -->             
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink :to="navItem.route" class="nav_link" @click="closeNavAndNavigate(navItem.route)">
                            <font-awesome-icon icon="circle-right" class="arrow"/>
                            <span class="label">{{ navItem.label }}</span>
                            <span class="label_en">{{ navItem['label_en'] }}</span>
                        </RouterLink>
                    </li>                 
                    <button class="contact_us">聯絡我們</button>
                    <button class="signin_btn">會員登入</button>
                </ul>
                <!-- 社群連結 -->
                <div class="social_link">
                   <font-awesome-icon :icon="['fab', 'facebook-f']" class="social_icon"/>
                   <font-awesome-icon :icon="['fab', 'instagram']" 
                   class="social_icon"/>
                </div>                
            </div>
        </transition>
    </div>
    <!-- ------ -->


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