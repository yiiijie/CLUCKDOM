<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import useContentVisibility from '@/composables/useContentVisibility'

const { isLargeTablet, showContent, toggleContentVisibility } =
    useContentVisibility()

const sets = ref([])

const fetchproductsSetData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/productsSet')
        sets.value = response.data
    } catch (error) {
        console.error(error.response)
    }
}

onMounted(() => {
    fetchproductsSetData()
})
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
