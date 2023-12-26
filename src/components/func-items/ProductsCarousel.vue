<script setup>
import { reactive } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const slides = reactive([
    {   id: '1',
        name: '幸福好蛋',
        slogan: '破殼而出幸福滿載！',
        en:'HAPPINESS EGGS',
        imgPath:'/images/home/products-carousel/happiness_eggs.jpg',
    },
    {   id: '2',
        name: '田園好蛋',
        slogan: '滿溢自然的美味！',
        en:'HEALTHY EGGS',
        imgPath:'/images/home/products-carousel/healthy_eggs.jpg',
    },
    {   id: '3',
        name: '悠活好蛋',
        slogan: '專屬你的悠美時光！',
        en:'LEISURELY EGGS',
        imgPath:'/images/home/products-carousel/leisurely_eggs.jpg',
    },
    {   id: '4',
        name: '頂級好蛋',
        slogan: '蛋中之王的尊貴口感！',
        en:'PREMIUM EGGS',
        imgPath:'/images/home/products-carousel/premium_eggs.jpg',
    },
])
    
</script>

<template>
    <div class="background_texture"></div>
    <div class="title">
        <h2>EGG SERIES</h2>
        <img src="/images/home/products-carousel/img_eggs_line.svg" alt="裝飾線">
    </div>
    <Carousel :items-to-show="4.5" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide.id" class="carousel_item">
            <a href="">
                <div class="img_eggs">
                    <img :src="slide.imgPath" alt="產品圖"> 
                </div>
                <div class="product">
                    <div class="product_info">
                        <div class="product_name">
                            <strong><p>{{ slide.name }}</p></strong>
                            <span class="product_slogan">| {{ slide.slogan }}</span>
                        </div>
                        <span>{{ slide.en }}</span> 
                    </div>
                    <div class="button">
                        <font-awesome-icon class="arrow_right" :icon="['fas', 'arrow-right']" />
                    </div>
                </div>     
            </a>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
   
</template>

<style scoped lang="scss">
    @import "@/assets/scss/components/func-items/products-carousel";
</style>