<script setup>
import ProductsCarousel from '@/components/func-items/ProductsCarousel.vue';
import InfiniteScrollCarousel from '@/components/func-items/InfiniteScrollCarousel.vue';
import Navbar from '@/components/global/Navbar.vue';
import useNavbarVisibility from '@/composables/useNavbarVisibility';

// 滾輪往下時，顯示較扁的navbar
const { showNavbar } = useNavbarVisibility();

</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        <section class="web_purpose">
            <!-- for mobile -->
            <div class="header_logo">
                <RouterLink :to="'/'">
                    <img src="/images/home/header/mobile_header_logo.svg" alt="logo">
                </RouterLink>
            </div>
            <!-- --- -->
            <div class="purpose_inner" data-aos="fade-up" data-aos-duration="1500">
                <div class="img_eggshape">
                    <img src="/images/home/img_eggshape.png" alt="CLUCKDOM宗旨"> 
                </div>
                <div class="title">
                    <h1>
                        安心的鷄蛋品牌。
                        <br>
                        用<span class="important_color">愛</span>傳遞毎分健康
                        <br>
                        用心<span class="secondary_color">守護</span>毎顆蛋
                    </h1>
                    <span>✤ GLOW UP IN LOVE ✤</span> 
                </div>  
            </div>
        </section>

        <!-- 關於我們 -->
        <section class="about" data-aos="fade-up" data-aos-duration="1500">
            <div class="about_inner">
                <div class="text">
                    <h2>追尋純淨 ⎯
                        <br>放牧鷄蛋的<span class="secondary_color">天然</span>之旅
                    </h2>
                    <p>自雞蛋王國成立以來，我們不僅是雞蛋生產者，更是大自然的伙伴。</p>
                    <p>透過綠意盎然的放牧環境，我們孕育出自由奔放、健康茁壯的雞群，</p>
                    <p>天然泉水的滋潤，是我們對雞隻們最嚴謹的呵護。</p>
                    <p>我們像對待自己的孩子一樣，讓雞隻們保持快樂是我們的使命。</p>
                </div>
                <div class="img_people">
                    <img src="/images/home/img_people.svg" alt="關於我們">
                </div>
            </div>
        </section>
    
        <!-- 願景 vision -->
        <img class="wave01" src="/images/home/img_wave01.svg" alt="wave">
        <section class="vision">
            <div class="vision_inner">
                <div class="img_lawn">
                    <img src="/images/home/img_lawn.jpg" alt="放牧飼養"> 
                </div>
                <div class="title">
                    <h2>打造<span class="important_color">放牧式</span>飼養的未來。
                        <br>一場革命性的願景
                    </h2>
                    <span class="english">⎯ Pasture-Raised Farming ⎯</span>      
                </div>                  
                <div class="img_chick" data-aos="fade-up" data-aos-duration="1500">
                    <img src="/images/home/img_chick.jpg" alt="picture"> 
                </div>
                <div class="img_eggs">
                    <img src="/images/home/img_eggs.jpg" alt="picture">
                </div>
                <div class="text" data-aos="fade-up" data-aos-duration="1500">
                    <p>在雞蛋王國，我們有著獨特的願景 ⎯ 希望改變台灣雞隻飼養方式。
                        <br>我們決心用放牧飼養來取代傳統的格子籠和平面飼養，讓雞隻們都能自由活動。</p>
                        <p>我們與創辦人以及眾多企業家攜手合作，堅持不使用針劑、藥物或強迫的飼養過程，創造出一個能讓每位顧客以實惠的價格品嚐到放牧飼養的幸福雞蛋。我們的目標是建立一個人與動物健康快樂的經濟循環，並以獨立企業的形式推動放牧飼養，結合群眾養雞的力量，共同創造永續經營的未來。</p>
                        <p>在雞蛋王國，我們以創新和熱情，開創出一個健康的雞蛋時代，一個注重品質和永續的經營模式。</p>
                </div>
                <div class="deco_dialog">
                    <img src="/images/home/img_dialog2.svg" alt="" data-aos="zoom-in" data-aos-delay="1500">
                </div>
            </div>   
        </section>
    
        <ProductsCarousel />
        <InfiniteScrollCarousel/>
    </div>
</template>


<style scoped lang="scss">
    @import "@/assets/scss/pages/home";
</style>