<script setup>
import { reactive } from 'vue';
import HeaderBanner from '@/components/header-banner/headerBanner.vue';
import ProductsSet from '@/components/products-set/ProductsSet.vue';
import Navbar from '@/components/global/Navbar.vue';
import useNavbarVisibility from '@/composables/useNavbarVisibility';

const { showNavbar } = useNavbarVisibility();


const list = reactive([
    {   id: '1',
        name: '幸福好蛋',
        slogan: '破殼而出幸福滿載！',
        en:'HAPPINESS EGGS',
        imgPath:'/images/products/list/happiness_eggs.jpg',
        prdLogoPath:'/images/products/list/happiness_logo.svg',
        prdIntro:'是由雞吃著高品質、營養豐富的有機飼料所產的蛋，裡面包括有機穀物、天然植物蛋白和多種維生素。',
        currentPrice:'NT$150',
        originalPrice:'NT$200',
    },
    {   id: '2',
        name: '田園好蛋',
        slogan: '滿溢自然的美味！',
        en:'HEALTHY EGGS',
        imgPath:'/images/products/list/healthy_eggs.jpg',
        prdLogoPath:'/images/products/list/healthy_logo.svg',
        prdIntro:'是由放養在田園環境中的雞所產的蛋。他們享受自由奔跑和吃天然穀物，為蛋提供了天然的美味和營養價值。',
        currentPrice:'NT$150',
        originalPrice:'NT$200',
    },
    {   id: '3',
        name: '悠活好蛋',
        slogan: '專屬你的悠美時光！',
        en:'LEISURELY EGGS',
        imgPath:'/images/products/list/leisurely_eggs.jpg',
        prdLogoPath:'/images/products/list/leisurely_logo.svg',
        prdIntro:'是這是以精心篩選的有機飼料為基礎，雞只在自然環境下生活，享受優質谷物、蔬菜和蛋白質的食物。',
        currentPrice:'NT$150',
        originalPrice:'NT$200',
    },
    {   id: '4',
        name: '頂級好蛋',
        slogan: '蛋中之王的尊貴口感！',
        en:'PREMIUM EGGS',
        imgPath:'/images/products/list/premium_eggs.jpg',
        prdLogoPath:'/images/products/list/premium_logo.svg',
        prdIntro:'是由精心挑選的優質飼料所餵養的雞所產的蛋。這些飼料包括高品質的有機穀物、天然植物蛋白和營養補充劑，為雞提供均衡的營養，使蛋品質卓越。這些頂級好蛋帶來絕佳的口感和豐富的營養價值，讓您享受最優質的雞蛋體驗。',
        currentPrice:'NT$150',
        originalPrice:'NT$200',
    },
])
</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        <section class="header_container">
            <HeaderBanner
                bannerImage="/images/products/header_banner.jpg"
                sloganText="精選系列"
                sloganEnText="Product Introduction">
            </HeaderBanner>
            <img class="header_wave" src="/images/header_wave.png" alt="wave">
        </section>
        
        <!-- 動態背景 -->
        <section class="falling_eggs_container">  
            <div class="egg_intro">
                <h1>鷄蛋王國用<span class="important_color">心</span>飼育<br>與家人共享<span class="secondary_color">天然營養</span>
                </h1>
                <p>蛋白質是人體日常所需的重要營養之一
                    <br>
                    而雞蛋被廣泛視為補充蛋白質的理想選擇
                    <br>雞蛋中富含人體必需的胺基酸，是一種優良的蛋白質來源
                    <br>能夠滿足身體對營養的需求
                    <br>歡迎踏入雞蛋王國參觀雞蛋的新世界！
                </p>    
            </div>
        </section>

        <img class="wave" src="/images/products/wave_1.svg" alt="wave">
        <section class="list">
            <div class="decoration">
                <img src="/images/products/eggs_line.svg" alt="裝飾圖">
            </div>
            <div class="decoration">
                <img src="/images/products/child.svg" alt="裝飾圖">
            </div>
            <div class="decoration">
                <img src="/images/products/hen.svg" alt="裝飾圖">
            </div>
            <ul class="list_inner">
                <li v-for="item in list" :key="item.id">
                    <RouterLink :to="'/products/details'" class="prd_img">
                        <div class="prd_click_bg"></div>
                        <div class="view_prd_circle">
                            <div class="txt">
                                <font-awesome-icon icon="magnifying-glass" class="icon" />
                                <span>查看商品</span>
                            </div>
                        </div>
                        <img :src="item.imgPath" alt="產品圖">
                    </RouterLink>
                    <div class="prd_content">
                        <div class="logo">
                            <img :src="item.prdLogoPath" alt="產品logo">
                        </div>
                        <p class="prd_intro">{{ item.prdIntro }}</p>
                        <div class="nutrition_facts">
                            <span>營養成分表 (100g含量)</span>
                            <font-awesome-icon icon="circle-plus" />
                        </div>
                        <div class="price_container">
                            <div class="pcs">
                                <span>10入</span>
                                <span>{{ item.currentPrice }}</span>
                                <span>{{ item.originalPrice }}</span>
                            </div>
                            <RouterLink :to="'/'">
                                <button type="button" class="cart_btn">
                                    <font-awesome-icon icon="cart-shopping" class="cart_icon" />
                                    <span>加入購物車</span>
                                </button>
                            </RouterLink>                     
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <ProductsSet />  
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/pages/products";
</style>