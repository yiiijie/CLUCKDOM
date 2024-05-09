<script setup>
import { ref, reactive } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const slides = reactive([
    {
        id: '1',
        name: '幸福好蛋',
        slogan: '破殼而出幸福滿載！',
        en: 'HAPPINESS EGGS',
        imgPath: '/images/home/products-carousel/happiness_eggs.jpg',
    },
    {
        id: '2',
        name: '田園好蛋',
        slogan: '滿溢自然的美味！',
        en: 'HEALTHY EGGS',
        imgPath: '/images/home/products-carousel/healthy_eggs.jpg',
    },
    {
        id: '3',
        name: '悠活好蛋',
        slogan: '專屬你的悠美時光！',
        en: 'LEISURELY EGGS',
        imgPath: '/images/home/products-carousel/leisurely_eggs.jpg',
    },
    {
        id: '4',
        name: '頂級好蛋',
        slogan: '蛋中之王的尊貴口感！',
        en: 'PREMIUM EGGS',
        imgPath: '/images/home/products-carousel/premium_eggs.jpg',
    },
])

const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
})

const breakpoints = ref({
    768: {
        itemsToShow: 2,
        snapAlign: 'start',
    },
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
    1200: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
    1440: {
        itemsToShow: 4,
        snapAlign: 'center',
    },
    1920: {
        itemsToShow: 5,
        snapAlign: 'center',
    },
})
</script>

<template>
    <section class="products_carousel">
        <div class="title">
            <h2>EGG SERIES</h2>
            <div class="eggs_line">
                <img
                    src="/images/home/products-carousel/img_eggs_line.svg"
                    alt="裝飾線"
                />
            </div>
        </div>
        <Carousel
            v-bind="settings"
            :breakpoints="breakpoints"
            :wrap-around="true"
            :autoplay="2000"
        >
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="carousel_item">
                    <router-link to="/products/details">
                        <div class="img_eggs">
                            <img :src="slide.imgPath" alt="產品圖" />
                        </div>
                        <div class="product">
                            <div class="product_info">
                                <div class="product_name">
                                    <p>{{ slide.name }}</p>
                                    <span class="product_slogan"
                                        >| {{ slide.slogan }}</span
                                    >
                                </div>
                                <span>{{ slide.en }}</span>
                            </div>
                            <div class="button">
                                <font-awesome-icon
                                    class="arrow_right"
                                    :icon="['fas', 'arrow-right']"
                                />
                            </div>
                        </div>
                    </router-link>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>

<style scoped lang="scss">
section.products_carousel {
    margin: 5% 0;

    @include large_tablets {
        margin: 8% 0;
    }
    @include large_phones {
        margin: 12.5% 0;
    }
    @include phones {
        margin: 15% 0;
    }

    div.title {
        max-width: $basewidth;
        width: 80%;
        display: flex;
        margin: 0 auto 2%;
        align-items: center;

        @include phones {
            flex-direction: column;
            margin: 0 auto 5%;
        }

        h2 {
            @include h2_en;
            text-align: center;
        }

        div.eggs_line {
            width: 35%;

            @include phones {
                width: 50%;
                margin: auto;
                margin-top: 10px;
            }

            img {
                width: 100%;
                margin-left: 50px;

                @include phones {
                    margin-left: 0;
                }
            }
        }
    }

    div.carousel_item {
        display: flex;
        flex-direction: column;

        a {
            cursor: pointer;
            text-decoration: none;
        }

        div.img_eggs {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin-bottom: 10px;
            overflow: hidden;

            &:hover > img {
                transform: scale(1.1);
            }

            img {
                width: 100%;
                border-radius: 50%;
                transition: 0.4s;
            }
        }

        div.product {
            display: flex;
            align-items: center;
            justify-content: space-between;

            div.product_info {
                text-align: left;

                span {
                    @include small_font;
                    font-family: $font_family_en;
                }

                div.product_name {
                    @include subtitle;
                    display: flex;
                    margin: 2% 0;
                    align-items: flex-end;
                    color: $importantColor;
                    font-weight: $fWBold;

                    span.product_slogan {
                        @include small_font;
                        margin-left: 5px;
                        color: $importantColor;
                        font-family: $font_family_title;
                    }
                }
            }

            div.button {
                .arrow_right {
                    color: $normalColor;
                    font-size: 14px;
                    padding: 15px;
                    transition: 0.3s;
                    border-radius: 50%;
                    background-color: $importantBtnColor;

                    &:hover {
                        background-color: $hoverBtnColorY;
                    }
                }

                &:hover > .arrow_right {
                    transform: translateX(5px);
                }
            }
        }
    }

    :deep(.carousel__next) {
        width: 60px;
        height: 60px;
        margin: 0;
        background-color: $normalColor;
        border: 1px solid $borderColor;
        border-radius: 50% 0 0 50%;
    }

    :deep(.carousel__prev) {
        width: 60px;
        height: 60px;
        margin: 0;
        background-color: $normalColor;
        border: 1px solid $borderColor;
        border-radius: 0 50% 50% 0;
    }

    :deep(.carousel__icon) {
        font-size: 2.5rem;
        color: $primaryTextColor;
    }
}
</style>
