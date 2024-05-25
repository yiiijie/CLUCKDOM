<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const count = ref(1)

const increment = () => {
    if (count.value < 1000) {
        count.value++
    }
}

const decrement = () => {
    if (count.value > 1) {
        count.value--
    }
}

// 控制input裡只能輸入1~1000的整數
const handleInput = () => {
    if (count.value < 1) {
        count.value = 1
    }
    if (count.value > 1000) {
        count.value = 1000
    }
}

const route = useRoute()
const productId = ref(route.params.productId)

const productDetails = ref(null)
const mainImgSrc = ref(null)

const changeMainImage = (src) => {
    mainImgSrc.value = src
}

const fetchProductsDetails = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3001/productsDetails/${productId.value}`
        )
        productDetails.value = response.data
        mainImgSrc.value = productDetails.value.mainImgSrc
    } catch (error) {
        console.error(error)
    }
}

onMounted(() => {
    fetchProductsDetails()
})

</script>

<template>
    <div>
        <section class="prod_inner" v-if="productDetails">
            <div class="prod_img">
                <!-- 大圖 -->
                <div class="main_img">
                    <img :src="mainImgSrc" alt="商品圖" />
                </div>
                <!-- 小圖 -->
                <div class="small_img_group">
                    <div
                        v-for="(img, index) in productDetails.imgGroup"
                        :key="index"
                        class="small_img"
                        @click="changeMainImage(img.imgSrc)">
                        <img :src="img.imgSrc" alt="商品圖" />
                    </div>
                </div>
            </div>
            <div class="prod_info">
                <h2 class="prod_name">{{ productDetails.name }}</h2>
                <p class="prod_features">
                    {{ productDetails.features[0] }}
                    <br />
                    {{ productDetails.features[1] }}
                    <br />
                    {{ productDetails.features[2] }}
                </p>
                <p class="prod_slogan">
                    {{ productDetails.slogan }}
                </p>
                <!-- 售價 -->
                <div class="prod_price">
                    <span class="title">優惠售價</span>
                    <span class="current_price">{{
                        productDetails.currentPrice
                    }}</span>
                    <del class="original_price">{{
                        productDetails.originalPrice
                    }}</del>
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
                        class="hide_arrows" />
                    <button type="button" @click="increment">
                        <font-awesome-icon icon="plus" />
                    </button>
                </div>
                <div class="btn_group">
                    <button type="button" class="cart_btn">
                        <font-awesome-icon
                            icon="cart-shopping"
                            class="cart_icon" />
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
section.prod_inner {
    max-width: $basewidth;
    width: 85%;
    display: flex;
    margin: 250px auto 12%;
    justify-content: space-between;

    @include large_tablets {
        width: 70%;
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

    div.prod_img {
        width: 45%;
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
            justify-content: space-between;
            padding-top: 20px;
            column-gap: 10px;
            cursor: pointer;

            .small_img {
                flex: 1;
            }

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

    div.prod_info {
        width: 50%;

        @include large_tablets {
            width: 100%;
        }

        h2.prod_name {
            @include h2;
            font-family: $font_family_content;

            @include large_tablets {
                margin-top: 5%;
            }
            @include tablets {
                margin-top: 10%;
            }
        }

        p.prod_features {
            @include paragraph;
            color: $secondaryColor;
            margin: 5% 0;

            @include large_tablets {
                margin: 2% 0;
            }
        }

        p.prod_slogan {
            @include paragraph;
        }

        div.prod_price {
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
            padding: 10px 12px;
            box-sizing: border-box;
            justify-content: space-between;
            color: $primaryTextColor;
            border-radius: 10px;
            border: 1px solid $borderColor;

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
                font-size: 1.6rem;
                font-family: $font_price;
                color: $primaryTextColor;
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

// 隱藏input後面的上下箭頭
.hide_arrows::-webkit-outer-spin-button,
.hide_arrows::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
