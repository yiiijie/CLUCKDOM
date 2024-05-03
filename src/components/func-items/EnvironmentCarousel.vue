<script setup>
import { ref, reactive } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

const slides = reactive([
    {
        id: '1',
        imgPath: '/images/about/spring_water.jpg',
    },
    {
        id: '2',
        imgPath: '/images/about/feeding.jpg',
    },
    {
        id: '3',
        imgPath: '/images/about/eggs.jpg',
    },
    {
        id: '4',
        imgPath: '/images/about/eating_grains.jpg',
    },
    {
        id: '5',
        imgPath: '/images/about/feeding_2.jpg',
    },
    {
        id: '1',
        imgPath: '/images/about/group_hens.jpg',
    },
])

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = ref({
    // 576px 以上
    576: {
        itemsToShow: 1.5,
        snapAlign: 'center',
    },
    // 768px 以上
    768: {
        itemsToShow: 1.75,
        snapAlign: 'center',
    },
    // 1440px 以上
    1440: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
})
</script>

<template>
    <div>
        <section class="carousel">
            <h2 class="title">牧場生活環境</h2>
            <p class="content">
                走進雞蛋王國的牧場，迎接著一群一早就充滿活力的母雞！牧場環境設計得宜，為母雞們提供舒適的生活空間，每隻母雞都有足夠的空間自由活動，不受擁擠之苦。牧場內的水源清澈明凈，確保了他們隨時都能飲水取暖。
            </p>
            <Carousel
                v-bind="settings"
                :breakpoints="breakpoints"
                :wrap-around="true"
                :transition="500"
            >
                <Slide v-for="slide in slides" :key="slide.id" class="slide">
                    <div class="carousel_item">
                        <img :src="slide.imgPath" alt="牧場環境" />
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
%carousel_arrow_style {
    width: 4vw;
    height: 4vw;
    margin: 0;
    border-radius: 100%;
    background-color: $productsBgColor;

    @include large_tablets {
        width: 5vw;
        height: 5vw;
    }
    @include tablets {
        width: 8vw;
        height: 8vw;
    }
    @include large_phones {
        width: 12vw;
        height: 12vw;
    }
    @include phones {
        width: 14vw;
        height: 14vw;
    }
}

section.carousel {
    width: 100%;
    margin-bottom: 3%;
    overflow: hidden;

    h2.title {
        @include h2;
        text-align: center;
        margin-bottom: 10px;
        padding: 5% 0 0;

        @include tablets {
            padding: 10% 0 0;
        }
        @include large_phones {
            padding: 15% 0 0;
        }
    }

    p.content {
        width: 55%;
        margin: auto;
        @include paragraph;
        padding: 1% 0 3%;

        @include large_tablets {
            width: 70%;
        }
        @include tablets {
            width: 80%;
        }
    }

    .slide {
        div.carousel_item {
            width: 100%;
            height: 50vh;
            margin: 30px 30px;

            @include large_tablets {
                margin: 30px 20px;
            }
            @include tablets {
                height: 35vh;
                margin: 30px 10px;
            }
            @include large_phones {
                height: 35vh;
                margin: 30px 40px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 40px;
                border: 8px solid $productsBgColor;
            }
        }
    }
}

:deep(.carousel__next) {
    @extend %carousel_arrow_style;
    right: 23vw;

    @include tablets {
        right: 18vw;
    }
    @include large_phones {
        right: 0;
        border-radius: 50% 0 0 50%;
    }
}

:deep(.carousel__prev) {
    @extend %carousel_arrow_style;
    left: 23vw;

    @include tablets {
        left: 18vw;
    }
    @include large_phones {
        left: 0;
        border-radius: 0 50% 50% 0;
    }
}

:deep(.carousel__icon) {
    font-size: 2.5rem;
    color: $primaryTextColor;
}

:deep(.carousel__pagination-button::after) {
    border-radius: 50px;
    background-color: $borderColor;
}

:deep(.carousel__pagination-button--active::after) {
    background-color: $secondaryColor;
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide--prev {
    opacity: 0.55;
    transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
    opacity: 0.55;
    transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>
