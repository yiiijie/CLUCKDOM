<script setup>
import { reactive } from 'vue'
import HeaderBanner from '@/components/header-banner/HeaderBanner.vue'
import ProductsSet from '@/components/products-set/ProductsSet.vue'
import Navbar from '@/components/global/Navbar.vue'
import useNavbarVisibility from '@/composables/useNavbarVisibility'

const bannerImageUrl = '/images/products/header_banner.jpg'
const { showNavbar } = useNavbarVisibility()

const list = reactive([
    {
        id: '1',
        name: '幸福好蛋',
        slogan: '破殼而出幸福滿載！',
        en: 'HAPPINESS EGGS',
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
        slogan: '滿溢自然的美味！',
        en: 'HEALTHY EGGS',
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
        slogan: '專屬你的悠美時光！',
        en: 'LEISURELY EGGS',
        imgPath: '/images/products/list/leisurely_eggs.jpg',
        prdLogoPath: '/images/products/list/leisurely_logo.svg',
        prdIntro:
            '是這是以精心篩選的有機飼料為基礎，雞只在自然環境下生活，享受優質谷物、蔬菜和蛋白質的食物。',
        currentPrice: 'NT$150',
        originalPrice: 'NT$200',
    },
    {
        id: '4',
        name: '頂級好蛋',
        slogan: '蛋中之王的尊貴口感！',
        en: 'PREMIUM EGGS',
        imgPath: '/images/products/list/premium_eggs.jpg',
        prdLogoPath: '/images/products/list/premium_logo.svg',
        prdIntro:
            '是由精心挑選的優質飼料所餵養的雞所產的蛋。這些飼料包括高品質的有機穀物、天然植物蛋白和營養補充劑，為雞提供均衡的營養，使蛋品質卓越。這些頂級好蛋帶來絕佳的口感和豐富的營養價值，讓您享受最優質的雞蛋體驗。',
        currentPrice: 'NT$150',
        originalPrice: 'NT$200',
    },
])
</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
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
                    v-for="item in list"
                    :key="item.id"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <router-link to="/products/details" class="prd_img">
                        <div class="prd_click_bg"></div>
                        <div class="view_prd_circle">
                            <div class="txt">
                                <font-awesome-icon
                                    icon="magnifying-glass"
                                    class="icon"
                                />
                                <span>查看商品</span>
                            </div>
                        </div>
                        <img :src="item.imgPath" alt="產品圖" />
                    </router-link>
                    <div class="prd_content">
                        <div class="logo">
                            <img :src="item.prdLogoPath" alt="產品logo" />
                        </div>
                        <p class="prd_intro">{{ item.prdIntro }}</p>
                        <div class="nutrition_facts">
                            <span>營養成分表 (100g含量)</span>
                            <font-awesome-icon icon="circle-plus" />
                        </div>
                        <div class="price_container">
                            <div class="pcs">
                                <span>10入</span>
                                <span>{{ item.currentPrice }}</span>
                                <span>{{ item.originalPrice }}</span>
                            </div>
                            <button type="button" class="cart_btn">
                                <font-awesome-icon
                                    icon="cart-shopping"
                                    class="cart_icon"
                                />
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
    background-color: $productsBgColor;

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
            align-items: center;
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
                background: url('/images/products/footprint_1.svg') no-repeat;
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
                background-color: $productsBgColor;
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

                @include tablets {
                    margin-bottom: 5%;
                }
            }

            div.nutrition_facts {
                @include content_font;
                display: flex;
                padding: 3% 5%;
                margin-bottom: 7%;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                border-radius: 10px;
                color: $secondaryColor;
                background-color: $normalColor;
                border: 1px solid $secondaryColor;

                @include tablets {
                    margin-bottom: 5%;
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
