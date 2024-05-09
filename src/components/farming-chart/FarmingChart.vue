<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useContentVisibility from '@/composables/useContentVisibility'

const router = useRouter()
const isFirstDialog = (index) => index === 0
const { isLargeTablet, showContent, toggleContentVisibility } =
    useContentVisibility()

const steps = reactive([
    {
        index: 0,
        imgPath: '/images/about/chart/logo_red.svg',
        stepTitle: '呵護至顧客手中',
        content:
            '雞蛋王國從雛鳥的培養到出貨一貫都在自家的農場進行，以確保穩定地供應新鮮的雞蛋。',
    },
    {
        index: 1,
        imgPath: '/images/about/chart/chick.png',
        stepTitle: '雛鷄們的冒險旅程',
        content:
            '小雞們來到了雞蛋王國的養雞場，嚐了第一餐。在孵化後的前三天，若小雞未及時獲得餵養會變得虛弱無力，由於雛雞對寒冷極為敏感，所以我們特別保持雛雞室溫度維持在約30度左右。',
    },
    {
        index: 2,
        imgPath: '/images/about/chart/breeding.png',
        stepTitle: '羽翼初長',
        content:
            '柔軟黃色的小雛雞只有四天大，他們迅速地長出了羽毛，50天後他們將離開雞舍。在接下來的六個月裡，它們享受著吃飯和放鬆的時光，直到他們準備好開始下蛋。',
    },
    {
        index: 3,
        imgPath: '/images/about/chart/laying.png',
        stepTitle: '孵化成熟',
        content:
            '大約5個月開始產小雞蛋，但是這些蛋還不能賣給顧客。約6個月開始它們開始生產可銷售的雞蛋。',
    },
    {
        index: 4,
        imgPath: '/images/about/chart/picking.png',
        stepTitle: '人工收集',
        content:
            '母雞通常在上午11點進入產蛋高峰期，此時以手動方式逐一收集雞蛋。雖然手動收集非常費時費力，但能保持母雞之間的互動，並避免碰撞情況。',
    },
    {
        index: 5,
        imgPath: '/images/about/chart/washing.png',
        stepTitle: '外殼的細緻呵護',
        content:
            '在去除外殼上的裂縫後，接著進行對外殼的仔細清洗程序。這個過程確保外殼的衛生潔淨，維持雞蛋的品質。',
    },
    {
        index: 6,
        imgPath: '/images/about/chart/selection.png',
        stepTitle: '鷄蛋選別',
        content: '將雞蛋分為S、M和L三種尺寸，提供更精確的食材選擇。',
    },
    {
        index: 7,
        imgPath: '/images/about/chart/weighing.png',
        stepTitle: '稱重和包裝',
        content:
            '根據箱子的尺寸，我們會調整雞蛋的數量，確保每箱都是符合要求的重量。並使雞蛋安全無損地運送到銷售點和消費者手中。',
    },
    {
        index: 8,
        imgPath: '/images/about/chart/shipment.png',
        stepTitle: '新鮮直達',
        content:
            '我們以農場直銷的方式運作，直接將雞蛋運送至餐館、蛋糕店和批發商。我們也歡迎客戶們直接造訪雞蛋王國，親自選購新鮮的雞蛋。',
    },
])
</script>

<template>
    <img class="wave" src="/images/about/chart/wave.svg" alt="wave" />
    <section class="chart">
        <ul class="chart_inner">
            <li
                v-for="(step, index) in steps"
                :key="step.index"
                class="step"
                @click="toggleContentVisibility(index)"
            >
                <figure class="pic">
                    <p
                        v-if="isFirstDialog(index)"
                        class="first_dialog"
                        data-aos="fade-up"
                    >
                        ＼ 從培養到出貨！ ／
                    </p>
                    <img :src="step.imgPath" alt="養雞的過程圖" />
                </figure>
                <span class="step_title">{{ step.stepTitle }}</span>
                <figcaption
                    class="content"
                    v-show="showContent === index || isLargeTablet"
                >
                    {{ step.content }}
                </figcaption>
                <button class="see_more_btn" v-show="!isLargeTablet">
                    <font-awesome-icon
                        icon="plus"
                        v-show="showContent !== index && !isLargeTablet"
                    />
                    <font-awesome-icon
                        icon="angle-up"
                        v-show="showContent === index && !isLargeTablet"
                    />
                </button>
            </li>

            <div class="btn_to_products">
                <div class="illust" data-aos="fade-up">
                    <img
                        src="/images/about/chart/to_prd_page_hen.svg"
                        alt="裝飾圖"
                    />
                </div>
                <RouterLink :to="'/products'" class="to_products_page">
                    <button>
                        <span>前往線上購物商店</span>
                        <font-awesome-icon
                            class="arrow_right"
                            :icon="['fas', 'arrow-right']"
                        />
                    </button>
                </RouterLink>
            </div>
        </ul>
    </section>
</template>

<style lang="scss">
img.wave {
    display: block;
}

section.chart {
    position: relative;
    padding: 10% 0;
    background-color: $aboutBgColor;

    @include tablets {
        padding: 20% 0;
    }

    &::before {
        content: '';
        position: absolute;
        width: 18%;
        height: 9%;
        left: 25%;
        top: 0px;
        transform: translateY(-100%);
        background: url(/images/about/chart/hen_sing.svg) no-repeat;

        @include large_tablets {
            top: 5.5%;
            left: 10%;
            width: 18%;
            height: 8%;
            z-index: 2;
        }
        @include tablets {
            top: 6.5%;
            left: 10%;
            width: 20%;
            height: 6%;
            z-index: 2;
        }
    }

    ul.chart_inner {
        max-width: $basewidth;
        width: 90%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        padding: 5% 0;
        z-index: 1;
        justify-content: center;
        border-radius: 40px;
        box-sizing: border-box;
        border: 10px solid $decorationColor;
        background-color: $normalColor;

        @include large_tablets {
            padding: 9% 0;
            border: 7px solid $decorationColor;
        }
        @include large_phones {
            padding: 15% 0;
            border: 7px solid $decorationColor;
        }

        &::after {
            content: '';
            position: absolute;
            top: -70px;
            width: clamp(130px, 20vw, 230px);
            height: 90px;
            background: url(/images/about/chart/list.svg) no-repeat;

            @include tablets {
                top: -50px;
            }
            @include large_phones {
                top: -40px;
            }
        }

        li.step {
            width: 24%;
            position: relative;
            margin: 3% 3.5%;
            text-align: center;
            cursor: pointer;

            @include tablets {
                width: 35%;
                margin: 4% 5%;
            }
            @include large_phones {
                width: 70%;
                margin: 4% 0;
            }

            &::after {
                content: '';
                width: 100%;
                height: 18%;
                position: absolute;
                top: -5%;
                z-index: -1;
                background: url(/images/about/chart/comb.svg) no-repeat;

                @include large_tablets {
                    height: 14%;
                }
                @include tablets {
                    width: 15vw;
                    height: 15vw;
                    top: -3vw;
                }
            }

            // 第一個<li>不顯示雞冠
            &:first-child::after {
                display: none;
            }

            figure.pic {
                margin-bottom: 8%;

                &::before {
                    position: absolute;
                    content: '';
                    width: 50px;
                    height: 25px;
                    top: 25%;
                    z-index: 1;
                    animation: arrowMovement 1.8s infinite;
                    background: url(/images/about/chart/arrow.svg) no-repeat;

                    @include large_tablets {
                        top: 20%;
                    }
                    @include tablets {
                        top: 100px;
                    }
                    @include large_phones {
                        display: none;
                    }
                }

                @keyframes arrowMovement {
                    0% {
                        right: -20px;
                    }
                    50% {
                        right: -12%;
                    }
                    100% {
                        right: -20px;
                    }
                }

                img {
                    width: 100%;
                    border-radius: 50%;
                }

                p.first_dialog {
                    @include paragraph;
                    position: absolute;
                    top: -5%;
                    left: 0;
                    right: 0;
                    font-weight: $fWBold;
                    color: $primaryColor;
                    font-family: $font_family_title;

                    @include tablets {
                        top: -8%;
                    }
                    @include large_phones {
                        @include h3;
                        top: -5%;
                        font-family: $font_family_title;
                        color: $primaryColor;
                    }
                }
            }

            // 第一個<img>去掉圓角
            &:first-child figure > img {
                width: 60%;
                padding: 10% 0 0;
                border-radius: 0;
            }

            span.step_title {
                @include paragraph;
                padding: 5px 15px;
                border-radius: 6px;
                color: $primaryColor;
                background-color: $textBgColor;
            }

            figcaption.content {
                @include content_font;
                padding: 8% 0;
                text-align: justify;

                @include tablets {
                    padding: 8% 0 0;
                }
            }

            // 768px以下出現
            button.see_more_btn {
                margin: 5% auto;
                display: block;
                padding: 3% 10%;
                border-radius: 50px;
                color: $secondaryColor;
                cursor: pointer;
                border: 1px solid $secondaryColor;
                background-color: $normalColor;
            }
        }

        div.btn_to_products {
            width: 80%;

            div.illust {
                width: clamp(150px, 25vw, 250px);
                display: flex;
                position: relative;
                left: 5%;
                bottom: -10%;
                z-index: -1;

                img {
                    width: 100%;
                }
            }

            a.to_products_page {
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;

                button {
                    @include h3;
                    width: 100%;
                    padding: 20px 0;
                    border-radius: 50px;
                    cursor: pointer;
                    font-family: $font_family_title;
                    background-color: $normalBtnColor;
                    transition: 0.2s;

                    &:hover {
                        color: $normalColor;
                        background-color: $importantBtnColor;
                    }

                    &:hover > .arrow_right {
                        color: $normalColor;
                        transform: translateX(8px);
                        transition: 0.2s;
                    }
                }

                .arrow_right {
                    @include h3;
                    padding-left: 3%;
                    transition: 0.2s;
                }
            }
        }
    }
}
</style>
