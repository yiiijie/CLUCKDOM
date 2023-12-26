<script setup>
import HeaderBanner from '@/components/header-banner/headerBanner.vue';
</script>

<template>
    <section class="header_container">
        <HeaderBanner
            class="test"
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
        <div class="falling_eggs_bg"></div> 
    </section>

    <!-- 產品項目 -->
    <section class="list">
        <img class="wave01" src="/images/products/img_wave03.svg" alt="wave">
        <ul class="list_inner">
            <li v-for="item in list" >
                <div class="pic">
                    <img src="/images/products/list/header_wave.png" alt="幸福好蛋商品">
                </div>
                <div class="txt">
                    <div class="logo">
                        <img src="pic/happiness_logo.svg" alt="幸福好蛋logo">
                    </div>
                    <p>是由雞吃着高品質、營養豐富的有機飼料所產的蛋，裡面包括有機穀物、天然植物蛋白和多種維生素。</p>
                    <div class="nutrition">
                        <span>營養成分表（100g含量）</span>
                        <i class="fa-solid fa-circle-chevron-down"></i>
                    </div>
                    <div class="price_wrap">
                        <div class="price">
                            <div class="six_pcs">
                                <span class="pcs">6入</span>
                                <span class="money">NT$130</span>
                                <span class="tax">(含稅)</span>
                            </div>
                        </div>
                        <div class="add_cart">
                            <a href="#">
                                <div class="button">
                                    <i class="fa-solid fa-cart-shopping"></i>加入購物車
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>

</template>

<style scoped lang="scss">
    @import "@/assets/scss/pages/products";
</style>