<script setup>

</script>

<template>
    <div class="carousel_container">
        <div class="carousel_list" >
            <div class="header_banner2"></div>
            <div class="header_banner1"></div>
        </div>
        <img class="header_wave" src="/images/header_wave.png" alt="輪播圖">
        <div class="header_slogan">
            <span class="chinese">幸福蛋的滋味</span>
            <span class="english">The Blissful Flavor of Eggs</span>
        </div>
        <!-- scroll down -->
        <div class="scroll_down">SCROLL</div>
    </div>
</template>

<style scoped lang="scss">
    %header_img {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        animation: imgAnimate 10s linear infinite;
    }

    @keyframes imgAnimate {
        0% {
            opacity: 1;
            transform: scale(1.2);
        }
        25% {
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        to {
            opacity: 0;
            transform: scale(1);
        }
    }

    div.carousel_container {
        position: relative;

        div.carousel_list {
            position: relative;
            width: 100%;
            height: 90vh;
            overflow: hidden;
            transition: all 0.5s;

            @include large_tablets {
                height: 70vh;
            }
            @include tablets {
                height: 65vh;
            }

            div.header_banner2 {
                @extend %header_img;
                background-image: url('/images/home/header-carousel/header_banner2.jpg');
                animation-delay: 5s;
            }

            div.header_banner1 {
                @extend %header_img;
                background-image: url('/images/home/header-carousel/header_banner.jpg');
                animation-delay: 0s;
            }
        }

        img.header_wave {
            position: absolute;
            bottom: 0;
            width:100%;
        }

        div.header_slogan {
            @include header_slogan_style;

            span.chinese {
                @include header_slogan_font;
                display: block;
                color: $normalColor;
            }

            span.english {
                @include header_slogan_en_font;
                color: $normalColor;
            }
        }
    }

    div.scroll_down {
        @include paragraph;
        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100px;
        color: $secondaryColor;
        font-family: $font_family_en;

        &::before {
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background-color: $secondaryColor;
            animation: wheel 2.5s infinite;
        }
    }

    @keyframes wheel {
        0% {
            opacity: 1;
            top: -80px;
        }
        50% {
            top: -20px;
        }
        100% {
            opacity: 0;
            top: -20px;
        }
    }
</style>
