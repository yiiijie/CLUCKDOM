<script setup>
import { ref, reactive } from 'vue';
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

const slides = reactive([
    {
        id: "1",
        imgPath: "/images/about/spring_water.jpg",
    },
    {
        id: "2",
        imgPath: "/images/about/feeding.jpg",
    },
    {
        id: "3",
        imgPath: "/images/about/eggs.jpg",
    },
    {
        id: "4",
        imgPath: "/images/about/eating_grains.jpg",
    },
    {
        id: "5",
        imgPath: "/images/about/feeding_2.jpg",
    },
    {
        id: "1",
        imgPath: "/images/about/group_hens.jpg",
    },
])

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center'
})

const breakpoints = ref({
  // 576px 以上
  576: {
    itemsToShow: 1.5,
    snapAlign: 'center'
  },
  // 768px 以上
  768: {
    itemsToShow: 1.75,
    snapAlign: 'center'
  },
  // 1440px 以上
  1440: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
})
</script>

<template>
    <div>
        <section class="carousel">
            <h2 class="title">牧場生活環境</h2>
            <p class="content">走進雞蛋王國的牧場，迎接著一群一早就充滿活力的母雞！牧場環境設計得宜，為母雞們提供舒適的生活空間，每隻母雞都有足夠的空間自由活動，不受擁擠之苦。牧場內的水源清澈明凈，確保了他們隨時都能飲水取暖。
            </p>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="500">
                <Slide v-for="slide in slides" :key="slide.id" class="slide">
                    <div class="carousel_item">
                        <img :src="slide.imgPath" alt="牧場環境">
                    </div>
                </Slide>
    
                <template #addons>
                    <Pagination />
                    <Navigation />
                </template>
            </Carousel>
        </section> 
    </div>
</template>

<style scoped lang="scss">
   @import "@/assets/scss/components/func-items/environment-carousel";
</style>