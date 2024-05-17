<script setup>
import { reactive } from 'vue'
import useContentVisibility from '@/composables/useContentVisibility'

const { isLargeTablet, showContent, toggleContentVisibility } =
    useContentVisibility()

const sets = reactive([
    {
        id: '1',
        name: '嚴選放牧蛋蛋白液',
        imgPath: '/images/products/sets/eggs_set_1.jpg',
        setIntro: '不用再把蛋黃丟掉，只要開瓶，輕鬆蒸煮美味又新鮮的蛋白！',
        contents: '內容物 - 6瓶/箱',
        weight: '重(容)量 - 935毫升/瓶',
        mainIngredient: '主成分 - 鮮雞蛋蛋白',
        currentPrice: 'NT$899',
        originalPrice: 'NT$1099',
    },
    {
        id: '2',
        name: '經典葡式蛋塔',
        imgPath: '/images/products/sets/eggs_set_2.jpg',
        setIntro: '香脆的派皮包裹奶香蛋液，口感絲滑綿密，每口都是甜蜜的享受。',
        contents: '內容物 - 12個/盒',
        weight: '重(容)量 - 30克/個',
        mainIngredient:
            '主成分 - 動物性鮮奶油、鮮雞蛋、水、糖、植物性油脂、麵粉',
        currentPrice: 'NT$620',
        originalPrice: 'NT$680',
    },
    {
        id: '3',
        name: '減糖配方雞蛋捲',
        imgPath: '/images/products/sets/eggs_set_3.jpg',
        setIntro: '新鮮雞蛋拌入法國諾曼第天然奶油製作，減糖10％、不加一滴水。',
        contents: '內容物 - 18根/盒',
        weight: '重(容)量 - 5公克/根',
        mainIngredient: '主成分 - 鮮雞蛋、法國發酵奶油、麵粉、糖、奶粉、食鹽',
        currentPrice: 'NT$220',
        originalPrice: 'NT$280',
    },
    {
        id: '4',
        name: '放牧烏骨鷄滴鷄精',
        imgPath: '/images/products/sets/eggs_set_4.jpg',
        setIntro:
            '嚴選12周以上足齡烏骨雞，滴滴精純，採用生物技術製程，堅持厚工慢滴。',
        contents: '內容物 - 10袋/盒',
        weight: '重(容)量 - 60毫升/包',
        mainIngredient: '主成分 - 放牧烏骨雞',
        currentPrice: 'NT$1680',
        originalPrice: 'NT$1880',
    },
    {
        id: '5',
        name: '營養滿分鷄蛋麵 ',
        imgPath: '/images/products/sets/eggs_set_5.jpg',
        setIntro:
            '口感滑順、Q彈有勁，散發淡雅的雞蛋香，品嚐麵香的純粹，每一口都是享受。',
        contents: '內容物 - 4包/袋',
        weight: '重(容)量 - 120克/包',
        mainIngredient: '主成分 - 鮮雞蛋、麵粉、鹽、水',
        currentPrice: 'NT$238',
        originalPrice: 'NT$289',
    },
    {
        id: '6',
        name: '濃厚鷄蛋布丁',
        imgPath: '/images/products/sets/eggs_set_6.jpg',
        setIntro: '手炒微苦焦糖，慢火蒸煮，布丁滑潤綿密，是記憶中的古早味。',
        contents: '內容物 - 6入/盒',
        weight: '重(容)量 - 135克/顆',
        mainIngredient: '主成分 - 水、鮮雞蛋、脫脂奶粉、糖、鮮奶油、香草香料。',
        currentPrice: 'NT$360',
        originalPrice: 'NT$390',
    },
])
</script>

<template>
    <img class="set_wave" src="/images/products/wave.png" alt="wave" />
    <section class="set">
        <section class="sets_inner">
            <div class="title">
                <div class="subtitle_icon">
                    <img
                        src="/images/products/sets/subtitle_dialog.svg"
                        alt="副標" />
                </div>
                <h2>美食愛好者必選<br />放牧鷄蛋周邊禮盒</h2>
            </div>
            <ul class="sets_container">
                <li v-for="(set, index) in sets" :key="set.id">
                    <div class="set_img">
                        <img :src="set.imgPath" alt="產品圖" />
                    </div>
                    <div class="set_info">
                        <h4 class="set_name">{{ set.name }}</h4>
                        <p class="set_intro">{{ set.setIntro }}</p>
                        <div
                            class="set_contents"
                            @click="toggleContentVisibility(index)">
                            <button
                                v-show="showContent !== index && !isLargeTablet"
                                class="see_more_btn">
                                <span>組合內容物</span>
                                <font-awesome-icon
                                    icon="angle-down"
                                    class="arrow" />
                            </button>
                            <button
                                v-show="showContent === index && !isLargeTablet"
                                class="see_less_btn">
                                <span>組合內容物</span>
                                <font-awesome-icon
                                    icon="angle-up"
                                    class="arrow" />
                            </button>
                            <div
                                class="contents"
                                v-show="showContent === index || isLargeTablet">
                                <span>
                                    <font-awesome-icon
                                        icon="fa-regular fa-square-check"
                                        class="check_box" />
                                    {{ set.contents }}
                                </span>
                                <span>
                                    <font-awesome-icon
                                        icon="fa-regular fa-square-check"
                                        class="check_box" />
                                    {{ set.weight }}
                                </span>
                                <span class="main_ingredient">
                                    <font-awesome-icon
                                        icon="fa-regular fa-square-check"
                                        class="check_box" />
                                    {{ set.mainIngredient }}
                                </span>
                            </div>
                        </div>
                        <div class="price_container">
                            <div class="price">
                                <span>{{ set.currentPrice }}</span>
                                <span>{{ set.originalPrice }}</span>
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
    </section>
</template>

<style scoped lang="scss">
img.set_wave {
    width: 100%;
    display: block;
    background-color: $neutralColor;
}

section.set {
    position: relative;
    padding-bottom: 5%;

    @include large_phones {
        padding-bottom: 15%;
    }
}

section.sets_inner {
    position: relative;
    max-width: $basewidth;
    width: 85%;
    margin: auto;

    &::before {
        content: '';
        width: 15%;
        height: 5%;
        position: absolute;
        top: 9%;
        left: 10%;
        background: url('/images/products/sets/nest.svg') no-repeat;

        @include tablets {
            top: 6%;
            left: 6%;
        }
        @include large_phones {
            display: none;
        }
    }

    &::after {
        content: '';
        width: 15%;
        height: 5%;
        position: absolute;
        top: 8%;
        right: 10%;
        background: url('/images/products/sets/blackhen.svg') no-repeat;

        @include tablets {
            top: 6%;
            right: 6%;
        }
        @include large_phones {
            width: 20%;
            right: 0;
        }
    }
}

div.title {
    position: relative;
    padding: 8% 0;

    @include large_phones {
        padding: 15% 0 12%;
    }

    div.subtitle_icon {
        width: clamp(170px, 15vw, 260px);
        margin: auto;

        img {
            width: 100%;
        }
    }

    h2 {
        @include h2;
        padding-top: 5px;
        text-align: center;
    }
}

ul.sets_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        width: 30%;
        padding-bottom: 8%;

        @include large_tablets {
            width: 45%;
        }
        @include large_phones {
            width: 47%;
            padding-bottom: 10%;
            text-align: center;
        }

        div.set_img {
            padding-bottom: 7%;
            cursor: pointer;

            img {
                width: 100%;
                border-radius: 50%;
            }
        }

        div.set_info {
            padding: 0 10px;

            h4.set_name {
                @include h4;
                color: $primaryTextColor;
                padding-bottom: 5%;
            }

            p.set_intro {
                @include content_font;
                color: $primaryTextColor;

                @include large_phones {
                    display: none;
                }
            }

            div.set_contents {
                @include tablets {
                    margin: 5% 0;
                    border-radius: 6px;
                    border: 1px solid $secondaryColor;
                }

                // 768px以下出現
                button.see_more_btn,
                button.see_less_btn {
                    width: 100%;
                    padding: 4% 0;
                    cursor: pointer;
                    background-color: transparent;

                    span {
                        @include content_font;
                        padding-right: 5px;
                        color: $secondaryColor;
                    }

                    .arrow {
                        color: $secondaryColor;
                    }
                }

                div.contents {
                    padding: 20px 0;

                    @include tablets {
                        padding: 20px 15px;
                        border-top: 1px solid $secondaryColor;
                    }

                    span {
                        @include content_font;
                        color: $remarkColor;
                        display: block;
                        text-align: left;

                        .check_box {
                            margin-right: 5px;
                            color: $secondaryColor;
                        }
                    }

                    span.main_ingredient {
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }

            div.price_container {
                align-items: center;
                justify-content: space-between;

                div.price {
                    margin-bottom: 5%;

                    span:nth-child(1) {
                        @include price_font;
                        margin-right: 10px;
                    }

                    span:nth-child(2) {
                        @include content_font;
                        letter-spacing: 0;
                        color: $remarkColor;
                        text-decoration: line-through;
                    }
                }

                button.cart_btn {
                    @include paragraph;
                    width: 100%;
                    padding: 6px 20px;
                    border-radius: 50px;
                    cursor: pointer;
                    color: $normalColor;
                    background-color: $importantBtnColor;
                    transition: 0.2s;

                    .cart_icon {
                        padding-right: 10px;

                        @include large_phones {
                            display: none;
                        }
                    }

                    &:hover {
                        color: $normalColor;
                        background-color: $normalBtnColor;
                    }
                }
            }
        }
    }
}
</style>
