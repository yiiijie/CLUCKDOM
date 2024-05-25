<script setup>
import { ref } from 'vue'
import HeaderBanner from '@/components/header-banner/HeaderBanner.vue'
import ProductsSet from '@/components/products-set/ProductsSet.vue'
import Navbar from '@/components/global/Navbar.vue'
import useNavbarVisibility from '@/composables/useNavbarVisibility'

const bannerImageUrl = '/images/products/header_banner.jpg'
const { showNavbar } = useNavbarVisibility()

const showContent = ref(false)
const toggleContentVisibility = (index) => {
    showContent.value = showContent.value === index ? false : index
}

const products = ref([
    {
        id: '1',
        name: '幸福好蛋',
        imgPath: '/images/products/list/happiness_eggs.jpg',
        prdLogoPath: '/images/products/list/happiness_logo.svg',
        prdIntro:
            '是由雞吃著高品質、營養豐富的有機飼料所產的蛋，裡面包括有機穀物、天然植物蛋白和多種維生素。',
        currentPrice: 'NT$150',
        originalPrice: 'NT$200',
    },
    {
        id: '2',
        name: '田園好蛋',
        imgPath: '/images/products/list/healthy_eggs.jpg',
        prdLogoPath: '/images/products/list/healthy_logo.svg',
        prdIntro:
            '是由放養在田園環境中的雞所產的蛋。他們享受自由奔跑和吃天然穀物，為蛋提供了天然的美味和營養價值。',
        currentPrice: 'NT$150',
        originalPrice: 'NT$200',
    },
    {
        id: '3',
        name: '悠活好蛋',
        imgPath: '/images/products/list/leisurely_eggs.jpg',
        prdLogoPath: '/images/products/list/leisurely_logo.svg',
        prdIntro:
            '是以進口加拿大高品質亞麻籽為主軸，再加入天然穀類及珍貴「有機硒」、「維他命Ｅ」等營養元素。',
        currentPrice: 'NT$180',
        originalPrice: 'NT$250',
    },
    {
        id: '4',
        name: '頂級好蛋',
        imgPath: '/images/products/list/premium_eggs.jpg',
        prdLogoPath: '/images/products/list/premium_logo.svg',
        prdIntro:
            '是由嚴格篩選後的天后級母雞所生產的蛋，讓雞隻們在自然環境中成長，所有的雞蛋不含任何添加劑，完全符合天然食品標準。此外，每顆蛋都富含珍貴的靈芝營養成分，這種草藥被譽為「長生不老的秘方」。',
        currentPrice: 'NT$260',
        originalPrice: 'NT$360',
    },
])
</script>

<template>
    <div>
        <div v-show="showNavbar" class="navbar">
            <Navbar />
        </div>
        <section class="header_container">
            <HeaderBanner :image-url="bannerImageUrl">
                <template #slogan_text>
                    <span>精選系列</span>
                </template>
                <template #slogan_text_en>
                    <span>Product Introduction</span>
                </template>
            </HeaderBanner>
            <img class="header_wave" src="/images/header_wave.png" alt="wave" />
        </section>

        <!-- 動態背景 -->
        <section class="falling_eggs_container">
            <div class="egg_intro" data-aos="fade-up" data-aos-duration="1500">
                <h1>
                    鷄蛋王國用<span class="important_color">心</span
                    >飼育<br />與家人共享<span class="secondary_color"
                        >天然營養</span
                    >
                </h1>
                <p>
                    蛋白質是人體日常所需的重要營養之一
                    <br />
                    而雞蛋被廣泛視為補充蛋白質的理想選擇
                    <br />雞蛋中富含人體必需的胺基酸，是一種優良的蛋白質來源
                    <br />能夠滿足身體對營養的需求
                    <br />歡迎踏入雞蛋王國參觀雞蛋的新世界！
                </p>
            </div>
        </section>

        <img class="wave" src="/images/products/wave_1.svg" alt="wave" />
        <section class="list">
            <div class="decoration">
                <img src="/images/products/eggs_line.svg" alt="裝飾圖" />
            </div>
            <div class="decoration">
                <img src="/images/products/child.svg" alt="裝飾圖" />
            </div>
            <div class="decoration">
                <img src="/images/products/hen.svg" alt="裝飾圖" />
            </div>
            <ul class="list_inner">
                <li
                    v-for="(product, index) in products"
                    :key="product.id"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <router-link
                        :to="{
                            name: 'products-details',
                            params: { productId: product.id },
                        }"
                        class="prd_img"
                        target="_blank">
                        <div class="prd_click_bg"></div>
                        <div class="view_prd_circle">
                            <div class="txt">
                                <font-awesome-icon
                                    icon="magnifying-glass"
                                    class="icon" />
                                <span>查看商品</span>
                            </div>
                        </div>
                        <img :src="product.imgPath" alt="產品圖" />
                    </router-link>
                    <div class="prd_content">
                        <div class="logo">
                            <img :src="product.prdLogoPath" alt="產品logo" />
                        </div>
                        <p class="prd_intro">{{ product.prdIntro }}</p>
                        <div
                            class="nutrition_facts"
                            @click="toggleContentVisibility(index)">
                            <button>
                                <span>營養成分表 (每100g含量)</span>
                                <font-awesome-icon
                                    icon="circle-chevron-down"
                                    class="chevron_down" />
                            </button>
                            <dl class="contents" v-show="showContent === index">
                                <div>
                                    <dt>熱量</dt>
                                    <dd>134大卡</dd>
                                </div>
                                <div>
                                    <dt>水分</dt>
                                    <dd>75.9克</dd>
                                </div>
                                <div>
                                    <dt>蛋白質</dt>
                                    <dd>12.5克</dd>
                                </div>
                                <div>
                                    <dt>脂肪</dt>
                                    <dd>8.8克</dd>
                                </div>
                                <div>
                                    <dt>碳水化合物</dt>
                                    <dd>1.8克</dd>
                                </div>
                                <div>
                                    <dt>鈉</dt>
                                    <dd>140毫克</dd>
                                </div>
                                <div>
                                    <dt>膽固醇</dt>
                                    <dd>386毫克</dd>
                                </div>
                            </dl>
                        </div>

                        <div class="price_container">
                            <div class="pcs">
                                <span>10入</span>
                                <span>{{ product.currentPrice }}</span>
                                <span>{{ product.originalPrice }}</span>
                            </div>
                            <button type="button" class="cart_btn">
                                <font-awesome-icon
                                    icon="cart-shopping"
                                    class="cart_icon" />
                                <span>加入購物車</span>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <ProductsSet />
    </div>
</template>

<style scoped lang="scss">
section.header_container {
    position: relative;

    img.header_wave {
        @extend %header_wave;
    }
}

section.falling_eggs_container {
    position: relative;
    width: 100%;
    z-index: -1;
    background-size: cover;
    background-image: url('/images/products/falling_eggs.svg');
    animation: falling_loop 60s infinite linear;

    @include tablets {
        background-size: 120%;
    }
    @include large_phones {
        background-size: 150%;
    }

    div.egg_intro {
        max-width: $basewidth;
        width: 80%;
        padding: 10% 0;
        margin: auto;
        text-align: center;

        @include large_tablets {
            padding: 10% 0 18%;
        }
        @include tablets {
            padding: 10% 0 30%;
        }
        @include large_phones {
            padding: 15% 0 38%;
        }

        h1 {
            @include h1;

            span.important_color {
                color: $importantColor;
            }
            span.secondary_color {
                color: $secondaryColor;
            }
        }

        p {
            @include paragraph;
            margin: 50px 0 0;
            line-height: 2.5;
        }
    }
}

@keyframes falling_loop {
    0% {
        background-position: center 100%;
    }
    100% {
        background-position: center 0;
    }
}

img.wave {
    display: block;
}
section.list {
    position: relative;
    padding: 5% 0 8%;
    background-color: $neutralColor;

    @include tablets {
        padding: 8% 0;
    }

    div.decoration:nth-child(1) {
        position: absolute;
        width: 100%;
        top: -1.5%;
        overflow: hidden;

        @include tablets {
            top: -20px;
        }
        @include large_phones {
            display: none;
        }

        img {
            width: 120%;

            @include tablets {
                width: 160%;
            }
        }
    }

    div.decoration:nth-child(2) {
        position: absolute;
        width: clamp(130px, 22vw, 300px);
        height: 10%;
        top: -12%;
        left: 10%;

        @include tablets {
            top: -4.5%;
        }

        img {
            width: 100%;
        }
    }

    div.decoration:nth-child(3) {
        position: absolute;
        width: clamp(100px, 16vw, 200px);
        top: -5%;
        right: 10%;

        @include tablets {
            top: -2%;
        }

        img {
            width: 100%;
        }
    }

    ul.list_inner {
        max-width: $basewidth;
        width: 80%;
        margin: auto;

        li {
            display: flex;
            padding: 5% 0;
            gap: 0 7%;
            justify-content: space-between;

            &:nth-child(even) {
                flex-direction: row-reverse;

                @include tablets {
                    flex-direction: column;
                }
            }

            @include tablets {
                flex-direction: column;
                padding: 8% 0;
            }
        }

        a.prd_img {
            width: 50%;
            height: 50%;
            position: relative;

            @include tablets {
                width: 100%;
            }

            &::before {
                content: '';
                width: 12%;
                height: 10%;
                position: absolute;
                bottom: 10%;
                right: 10%;
                z-index: 2;
                transform: rotate(-15deg);
                background: url('/images/products/footprint.svg') no-repeat;
            }

            img {
                width: 100%;
                border-radius: 50%;
                box-sizing: border-box;
                border: 7px solid $normalColor;

                @include large_tablets {
                    border: 4px solid $normalColor;
                }
            }

            div.prd_click_bg {
                opacity: 0;
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: $neutralColor;
                transition: 0.3s;
            }

            &:hover .prd_click_bg {
                opacity: 0.6;
            }

            div.view_prd_circle {
                width: 150px;
                height: 150px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                border-radius: 50%;
                transition: 0.2s;
                background-color: $importantBtnColor;

                @include large_phones {
                    display: none;
                }

                div.txt {
                    @include paragraph;
                    color: $normalColor;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .icon {
                    font-size: 2rem;
                }

                span {
                    display: block;
                }
            }

            &:hover .view_prd_circle {
                opacity: 1;
            }
        }

        div.prd_content {
            width: 50%;
            padding-top: 3%;

            @include tablets {
                width: 100%;
            }

            div.logo {
                width: 70%;
                margin: auto;
                padding: 0 0 7%;

                img {
                    width: 100%;
                }

                @include tablets {
                    width: 50%;
                    padding: 4% 0;
                }
            }

            p.prd_intro {
                @include paragraph;
                margin-bottom: 7%;
                text-align: justify;

                @include tablets {
                    margin-bottom: 5%;
                }
            }

            div.nutrition_facts {
                margin-bottom: 7%;
                border-radius: 10px;
                background-color: $normalColor;
                border: 1px solid $secondaryColor;

                button {
                    width: 100%;
                    @include content_font;
                    display: flex;
                    padding: 3% 5%;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    border-radius: 10px;
                    color: $secondaryColor;
                    background-color: $normalColor;

                    .chevron_down {
                        font-size: 2rem;
                    }
                }

                dl.contents {
                    @include content_font;
                    padding: 5% 5%;
                    border-radius: 0 0 10px 10px;
                    background-color: $normalColor;
                    border-top: 1px solid $secondaryColor;

                    div {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }

            div.price_container {
                display: flex;
                align-items: center;

                @include large_phones {
                    display: block;
                    flex-direction: column;
                }

                div.pcs {
                    flex: 1;

                    @include large_phones {
                        margin-bottom: 5%;
                    }

                    span:nth-child(1) {
                        @include content_font;
                        padding-right: 15px;
                    }

                    span:nth-child(2) {
                        @include price_font;
                        padding-right: 10px;
                    }

                    span:nth-child(3) {
                        @include content_font;
                        letter-spacing: 0;
                        color: $remarkColor;
                        text-decoration: line-through;
                    }
                }

                button.cart_btn {
                    @include paragraph;
                    color: $normalColor;
                    padding: 6px 30px;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: $importantBtnColor;
                    transition: 0.2s;

                    @include large_tablets {
                        padding: 6px 15px;
                    }
                    @include tablets {
                        padding: 6px 30px;
                    }
                    @include large_phones {
                        width: 100%;
                    }

                    &:hover {
                        background-color: $hoverBtnColorY;
                    }

                    .cart_icon {
                        padding-right: 10px;
                    }
                }
            }
        }
    }
}
</style>
