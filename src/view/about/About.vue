<script setup>
import FarmingChart from '@/components/FarmingChart.vue';
import HeaderBanner from '@/components/header-banner/headerBanner.vue';


</script>

<template>
    <section class="header_container">
        <HeaderBanner
            bannerImage="/images/about/header_banner.jpg"
            sloganText="關於鷄蛋王國"
            sloganEnText="About CLUCKDOM">
        </HeaderBanner>
        <img class="header_wave" src="/images/header_wave.png" alt="wave">
    </section>
    <section class="intro"> 
        <div class="title">
            <span>Holding each egg with gentle care.</span> 
            <h1>用<span class="secondary_color">心</span>孵育極致鷄蛋</h1>
            <h1>以<span class="important_color">愛</span>澆灌土地</h1>           
        </div> 
        <div class="img_premium_eggs">
            <img src="/images/about/img_premium_eggs.png" alt="台灣產地優質鷄蛋">
        </div>
    </section>

    <!-- 環境介紹 照片 environment_intro -->
    <ul class="environment">
        <li class="img_water">
            <img src="/images/about/img_water.png" alt="新鮮的水源">
        </li>
        <li class="img_outdoor">
            <img src="/images/about/img_outdoor_1.png" alt="乾淨的養雞場戶外">
            <img src="/images/about/img_outdoor_2.png" alt="四周充滿大自然的環境">
        </li>
        <span class="en">ENVIRONMENT......</span>
    </ul>
    
    <!-- 關於我們 about us -->
    <section class="about_us">
        <div class="text_area">
            <div class="title">
                <img src="/images/about/img_eggs_line.svg" alt="裝飾線">
                <h2>ABOUT US</h2>
            </div>
            <h3>細心耕耘，不僅是美食，
                <br>
                更是<span>健康</span>與<span>自然</span>的完美融合。
            </h3>
            <div class="text">
                <p>目前雞場飼養約六萬隻雞，自動化系統負責飼料供應等工作，唯一仍然由人手操作的環節是雞蛋的收集。</p>
                <p>雞蛋王國以"像家人一樣珍惜培育"為主旨。我們深知環境對於雞蛋的品質影響重大，因此我們只使用純天然水及山海的恩惠，提供高品質同時，提供充滿快樂氣息的生長環境給我們的雞隻。 </p>
                <!-- <p>我們的每一顆雞蛋散發出的香氣和味道都是獨一無二的，這種獨特性讓我們的雞蛋成為全世界客人的喜愛和支持。</p> -->
            </div>
        </div>
        <div class="img_owner">
            <img src="/images/about/img_owner.jpg" alt="雞蛋王國的女主人">
        </div>
    </section>

    
    <FarmingChart />

</template>

<style scoped lang="scss">
    @import "@/assets/scss/pages/about";
</style>