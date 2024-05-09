<script setup>
import { ref } from 'vue'
const count = ref(1)

// button按到大於1000會沒反應(最高1000)
const increment = () => {
    if (count.value < 1000) {
        count.value++
    }
}

// button按到小於1會沒反應
const decrement = () => {
    if (count.value > 1) {
        count.value--
    }
}

// 控制input裡只能輸入1~1000的整數
// 如果輸入值小於1，則將其值設為1
const handleInput = (event) => {
    let value = parseInt(event.target.value)

    if (value < 1) {
        value = 1
    }
    if (value > 1000) {
        value = 1000
    }
    count.value = value
}

// 點擊小圖換大圖
const mainImgSrc = ref('/images/details/image_1.jpg')
const imgGroup = ref([
    { imgSrc: '/images/details/image_1.jpg' },
    { imgSrc: '/images/details/image_2.jpg' },
    { imgSrc: '/images/details/image_3.jpg' },
    { imgSrc: '/images/details/image_4.jpg' },
])

const changeMainImage = (src) => {
    mainImgSrc.value = src
}
</script>

<template>
    <div>
        <section class="prd_inner">
            <div class="prd_photos">
                <!-- 大圖 -->
                <div class="main_img">
                    <img :src="mainImgSrc" alt="商品圖" />
                </div>
                <!-- 小圖 -->
                <div class="small_img_group">
                    <div
                        v-for="(img, index) in imgGroup"
                        :key="index"
                        @click="changeMainImage(img.imgSrc)"
                    >
                        <img :src="img.imgSrc" alt="商品圖" />
                    </div>
                </div>
            </div>
            <div class="prd_info">
                <h2 class="prd_name">放牧土雞蛋｜幸福好蛋（10入）</h2>
                <p class="prd_features">
                    ✤ 蛋香飄逸、營養豐富
                    <br />
                    ✤ 嚴選新鮮蛋，絕無人工添加
                    <br />
                    ✤ 蛋香濃郁，蛋黃鮮美，蛋白柔滑绵密
                </p>
                <p class="prd_slogan">
                    幸福好蛋是由母雞吃著高品質、營養豐富的有機飼料所產的蛋，裡面包括有機穀物、天然植物蛋白和多種維生素。
                </p>
                <!-- 售價 -->
                <div class="prd_price">
                    <span class="title">優惠售價</span>
                    <span class="current_price">NT$399</span>
                    <del class="original_price">NT$450</del>
                </div>
                <label class="quantity_title">數量</label>
                <!-- 數量加減器 -->
                <div class="quantity_selector">
                    <button type="button" @click="decrement">
                        <font-awesome-icon icon="minus" />
                    </button>
                    <input
                        type="number"
                        v-model="count"
                        @input="handleInput"
                        class="hide_arrows"
                    />
                    <button type="button" @click="increment">
                        <font-awesome-icon icon="plus" />
                    </button>
                </div>
                <div class="btn_group">
                    <button type="button" class="cart_btn">
                        <font-awesome-icon
                            icon="cart-shopping"
                            class="cart_icon"
                        />
                        <span>加入購物車</span>
                    </button>
                    <button type="button" class="cart_btn">
                        <span>立即購買</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
section.prd_inner {
    max-width: $basewidth;
    width: 85%;
    display: flex;
    margin: 250px auto 12%;

    @include large_tablets {
        width: 75%;
        display: block;
        margin: 10% auto 15%;
    }
    @include tablets {
        width: 85%;
    }
    @include large_phones {
        width: 80%;
        margin: 10% auto 25%;
    }

    div.prd_photos {
        width: 65%;
        margin-right: 5%;

        @include large_tablets {
            width: 100%;
            margin-right: 0;
        }

        div.main_img {
            width: 100%;

            img {
                width: 100%;
                aspect-ratio: 1 / 1;
                border-radius: 10px;
                object-fit: cover;
                object-position: center;
            }
        }

        div.small_img_group {
            display: flex;
            padding-top: 20px;
            column-gap: 10px;
            cursor: pointer;

            img {
                width: 100%;
                height: 100%;
                aspect-ratio: 1 / 1;
                border-radius: 10px;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    div.prd_info {
        h2.prd_name {
            @include h2;
            font-family: $font_family_content;

            @include large_tablets {
                margin-top: 5%;
            }
            @include tablets {
                margin-top: 10%;
            }
        }

        p.prd_features {
            @include paragraph;
            color: $secondaryColor;
            margin: 5% 0;

            @include large_tablets {
                margin: 2% 0;
            }
        }

        p.prd_slogan {
            @include paragraph;
        }

        div.prd_price {
            margin: 5% 0 7%;

            @include large_tablets {
                margin: 5% 0;
            }

            span.title {
                @include paragraph;
                display: block;
            }

            span.current_price {
                @include price_font;
                color: $primaryColor;
                padding-right: 10px;
            }

            del.original_price {
                @include content_font;
                color: $remarkColor;
                letter-spacing: 0.05rem;
            }
        }

        label.quantity_title {
            @include paragraph;
        }

        div.quantity_selector {
            width: 30%;
            display: flex;
            padding: 10px;
            box-sizing: border-box;
            justify-content: space-between;
            color: $primaryTextColor;
            border-radius: 5px;
            border: 1px solid $primaryTextColor;

            @include tablets {
                width: 100%;
            }

            button {
                @include content_font;
                display: block;
                cursor: pointer;
                border: none;
                background: none;
            }

            input {
                width: 100%;
                display: block;
                text-align: center;
                border: none;
                background: none;
                color: $primaryTextColor;
                font-size: $paragraph;
                font-family: $font_price;
            }
        }

        div.btn_group {
            display: flex;
            justify-content: space-between;

            button.cart_btn {
                @include paragraph;
                width: calc(50% - 5px);
                padding: 6px 0;
                margin-top: 40px;
                border-radius: 50px;
                color: $normalColor;
                cursor: pointer;
                transition: 0.2s;

                &:first-child {
                    background-color: $secondaryColor;
                }

                &:last-child {
                    background-color: $primaryColor;
                }

                &:hover {
                    background-color: $hoverBtnColorY;
                }

                .cart_icon {
                    padding-right: 10px;

                    @include phones {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
