<script setup>
import ProductsCarousel from '@/components/func-items/ProductsCarousel.vue';
import InfiniteScrollCarousel from '@/components/func-items/InfiniteScrollCarousel.vue';
import Navbar from '@/components/global/Navbar.vue';
import useNavbarVisibility from '@/composables/useNavbarVisibility';

const { showNavbar } = useNavbarVisibility();

</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        <section class="web_purpose">  
            <div class="purpose_inner">
                <div class="img_eggshape">
                    <img src="/images/home/img_eggshape.png" alt="CLUCKDOM宗旨"> 
                </div>
                <div class="title">
                    <h1>用<span class="important_color">愛</span>傳遞毎一分健康。</h1>
                    <h1>用心<span class="secondary_color">守護</span>毎一顆蛋</h1>
                    <span>GLOW UP IN LOVE ......</span> 
                </div>  
            </div>
        </section>
    
        <section class="about">
            <div class="about_inner">
                <div class="txt">
                    <h2>追尋純淨：放牧鷄蛋的<span class="secondary_color">天然</span>旅程</h2>
                    <p>在雞蛋王國的農場裡，我們不僅僅是雞蛋的生產者，更是大自然的伙伴。透過綠意盎然的放牧環境，我們培育出自由奔放、健康茁壯的雞隻，為您帶來更美味、更天然的食材。</p>
                    <p>我們的承諾是提供您最純淨、最新鮮的雞蛋，讓您的餐桌上充滿自然的滋味。每一顆蛋都是我們對大自然的感激，也是對食物的嚴謹呵護，期待您與我們一同品味這份濃郁、來自心靈深處的美味。</p>
                </div>
                <div class="img_people">
                    <img src="/images/home/img_people.svg" alt="關於我們">
                </div>
            </div>
        </section>
    
        <section class="vision">
            <img class="wave01" src="/images/home/img_wave01.svg" alt="wave">
            <div class="vision_inner">
                <div class="img_all">
                    <div class="img_lawn">
                        <img src="/images/home/img_lawn.jpg" alt="放牧飼養"> 
                    </div>
                    <div class="img_chick">
                        <img src="/images/home/img_chick.jpg" alt="picture"> 
                    </div>
                    <div class="img_eggs">
                        <img src="/images/home/img_eggs.jpg" alt="picture">
                    </div>
                    <div class="title">
                        <h2 class="eggs">打造<span>放牧式</span>飼養的未來。</h2>
                        <h2>一場革命性的願景</h2>
                        <span>Crafting a Sustainable Future ......</span>      
                    </div>                  
                </div>
                <div class="txt">
                    <p>在雞蛋王國，我們有著獨特的願景 -- 希望改變台灣雞隻飼養方式。
                    <br>我們決心用放牧飼養來取代傳統的格子籠和平面飼養，讓每一位母雞都能發聲。</p>
                    <p>我們與創辦人以及眾多企業家攜手合作，堅持不使用針劑、藥物或強迫的飼養過程，創造出一個能讓每位顧客以實惠的價格品嚐到放牧飼養雞蛋的方式。我們的目標是建立一個人與動物健康快樂的經濟循環，並以獨立企業的形式推動放牧飼養，結合群眾養雞的力量，共同創造永續經營的未來。</p>
                    <p>在雞蛋王國，我們以創新和熱情，開創出一個全新的雞蛋時代，一個注重品質和永續的未來。</p>
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