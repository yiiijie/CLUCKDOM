<script setup>
import { ref } from "vue"
import wave from '../../../public/images/home/header-carousel/wave.png'
const scroll = ref(false)
window.addEventListener("scroll", function () {
  scroll.value = window.scrollY > 0;
});
</script>

<template>
    <div class="carousel_container" :class="{ scroll }">
        <div class="carousel_list" >
            <div class="header_img"></div>
            <div class="header_img"></div>
        </div>
        <img class="wave" :src="wave" alt="輪播圖">
        <div class="slogan">
            <span>蛋為心聲｜美味隨心</span>
            <span class="slogan_en">Where Eggstraordinary Begins!</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/components/func-items/header-carousel";
</style>
