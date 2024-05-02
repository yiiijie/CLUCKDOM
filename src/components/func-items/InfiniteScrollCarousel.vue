<script setup>

</script>

<template>
    <div class="carousel_wrap">
        <div class="carousel">           
            <img src="/images/home/infinite-scroll-carousel/img_1.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_2.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_3.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_4.jpg" alt="輪播照片">
        </div>
        <div class="carousel">
            <img src="/images/home/infinite-scroll-carousel/img_1.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_2.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_3.jpg" alt="輪播照片">
            <img src="/images/home/infinite-scroll-carousel/img_4.jpg" alt="輪播照片">
        </div>
    </div>
</template>

<style scoped lang="scss">
    div.carousel_wrap {
        overflow: hidden;
        display: flex;

        .carousel {
            display: flex;
            animation: slide 50s linear infinite;
        }

        img {
            margin: 0 8px;
            width: clamp(300px,30vw,530px);
            border-radius: 10px;
        }
    }

    @keyframes slide{
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>