<script setup>
import ProductsCarousel from '@/components/func-items/ProductsCarousel.vue'
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue'
import InfiniteScrollCarousel from '@/components/func-items/InfiniteScrollCarousel.vue'
import Navbar from '@/components/global/Navbar.vue'
import useNavbarVisibility from '@/composables/useNavbarVisibility'

// 滾輪往下時，顯示較扁的navbar
const { showNavbar } = useNavbarVisibility()
</script>

<template>
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        <HeaderCarousel />
        <section class="web_purpose">
            <!-- 1024px 以下出現 -->
            <div class="header_logo">
                <router-link to="/">
                    <img
                        src="/images/home/header/mobile_header_logo.svg"
                        alt="logo" />
                </router-link>
            </div>
            <!-- --- -->
            <div
                class="purpose_inner"
                data-aos="fade-up"
                data-aos-duration="1500">
                <div class="img_eggshape">
                    <img
                        src="/images/home/img_eggshape.png"
                        alt="CLUCKDOM宗旨" />
                </div>
                <div class="title">
                    <h1>
                        安心的鷄蛋品牌。
                        <br />
                        用<span class="important_color">愛</span>傳遞毎分健康
                        <br />
                        用心<span class="secondary_color">守護</span>毎顆蛋
                    </h1>
                    <span>✤ GLOW UP IN LOVE ✤</span>
                </div>
            </div>
        </section>

        <section class="about" data-aos="fade-up" data-aos-duration="1500">
            <div class="about_inner">
                <div class="text">
                    <h2>
                        追尋純淨 ⎯
                        <br />
                        放牧鷄蛋的<span class="secondary_color">天然</span>之旅
                    </h2>
                    <p>
                        自雞蛋王國成立以來，我們不僅是雞蛋生產者，更是大自然的伙伴。
                    </p>
                    <p>
                        透過綠意盎然的放牧環境，我們孕育出自由奔放、健康茁壯的雞群，
                    </p>
                    <p>天然泉水的滋潤，是我們對雞隻們最嚴謹的呵護。</p>
                    <p>
                        我們像對待自己的孩子一樣，讓雞隻們保持快樂是我們的使命。
                    </p>
                </div>
                <div class="img_people">
                    <img src="/images/home/img_people.svg" alt="關於我們" />
                </div>
            </div>
        </section>

        <img class="wave01" src="/images/home/img_wave01.svg" alt="wave" />
        <section class="vision">
            <div class="vision_inner">
                <div class="img_lawn">
                    <img src="/images/home/img_lawn.jpg" alt="放牧飼養" />
                </div>
                <div class="title">
                    <h2>
                        打造<span class="important_color">放牧式</span
                        >飼養的未來。 <br />一場革命性的願景
                    </h2>
                    <span class="english">⎯ Pasture-Raised Farming ⎯</span>
                </div>
                <div
                    class="img_chick"
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="/images/home/img_chick.jpg" alt="picture" />
                </div>
                <div class="img_eggs">
                    <img src="/images/home/img_eggs.jpg" alt="picture" />
                </div>
                <div class="text" data-aos="fade-up" data-aos-duration="1500">
                    <p>
                        在雞蛋王國，我們有著獨特的願景 ⎯
                        希望改變台灣雞隻飼養方式。
                        <br />我們決心用放牧飼養來取代傳統的格子籠和平面飼養，讓雞隻們都能自由活動。
                    </p>
                    <p>
                        我們與創辦人以及眾多企業家攜手合作，堅持不使用針劑、藥物或強迫的飼養過程，創造出一個能讓每位顧客以實惠的價格品嚐到放牧飼養的幸福雞蛋。我們的目標是建立一個人與動物健康快樂的經濟循環，並以獨立企業的形式推動放牧飼養，結合群眾養雞的力量，共同創造永續經營的未來。
                    </p>
                    <p>
                        在雞蛋王國，我們以創新和熱情，開創出一個健康的雞蛋時代，一個注重品質和永續的經營模式。
                    </p>
                </div>
                <div class="deco_dialog">
                    <img
                        src="/images/home/img_dialog2.svg"
                        alt=""
                        data-aos="zoom-in" />
                </div>
            </div>
        </section>

        <ProductsCarousel />
        <InfiniteScrollCarousel />
    </div>
</template>

<style scoped lang="scss">
section.web_purpose {
    position: relative;

    &::before {
        position: absolute;
        content: '';
        width: clamp(240px, 25vw, 450px);
        height: 100px;
        top: -40px;
        left: 3vw;
        background: url(/images/home/footprint.svg) no-repeat;

        @include large_phones {
            transform: rotate(15deg);
            left: -35vw;
        }
    }

    &::after {
        position: absolute;
        content: '';
        width: clamp(140px, 15vw, 250px);
        height: 100px;
        top: 0;
        right: 3vw;
        background: url(/images/home/footprint_2.svg) no-repeat;

        @include large_phones {
            width: clamp(50px, 20vw, 150px);
            top: 20px;
            right: 0;
            background: url(/images/home/footprint_3.svg) no-repeat;
        }
    }

    div.header_logo {
        display: none;
        width: 110px;
        max-width: 20vw;
        position: absolute;
        top: 0;
        right: 50%;
        transform: translate(50%, -50%);

        img {
            width: 100%;
        }

        // 1024px以下才會出現(only首頁版型)
        @include large_tablets {
            display: block;
        }
    }

    div.purpose_inner {
        max-width: $basewidth;
        width: 90%;
        display: flex;
        margin: auto;
        padding-top: 100px;
        justify-content: space-evenly;

        @include large_tablets {
            flex-direction: column;
        }

        div.img_eggshape {
            display: inline-block;
            position: relative;
            width: clamp(200px, 45vw, 550px);

            @include large_tablets {
                margin: 4% auto 0;
                display: block;
            }

            img {
                width: 100%;
            }

            &::before {
                position: absolute;
                content: '';
                width: 40%;
                height: 15%;
                bottom: 0;
                left: -10%;
                background-size: contain;
                background: url(/images/home/chick.svg) no-repeat;
            }
        }

        div.title {
            margin-top: 5%;
            writing-mode: vertical-lr;

            @include large_tablets {
                margin: 3% auto 0;
                order: -1;
            }

            h1 {
                @include h1_vertical;

                span.important_color {
                    @include h1_vertical;
                    color: $importantColor;
                }
                span.secondary_color {
                    @include h1_vertical;
                    color: $secondaryColor;
                }
            }

            span {
                @include paragraph_en;
                line-height: 4.8;
            }
        }
    }
}

section.about {
    position: relative;

    div.about_inner {
        max-width: $basewidth;
        width: 85%;
        display: flex;
        margin: 60px auto 5%;
        justify-content: space-between;
        align-items: center;

        @include large_tablets {
            width: 80%;
            margin-bottom: 10%;
        }

        div.text {
            h2 {
                @include h2;
                padding-bottom: 40px;

                span.secondary_color {
                    color: $secondaryColor;
                }
            }

            p {
                @include paragraph;

                @include large_phones {
                    display: inline;
                }
            }
        }

        div.img_people {
            width: 40%;

            img {
                width: 100%;
            }

            @include large_tablets {
                width: 30%;
            }
            @include tablets {
                display: none;
            }
        }
    }
}

img.wave01 {
    width: 100%;
    display: block;
}

section.vision {
    position: relative;
    background-color: $homeBgColor;

    div.vision_inner {
        position: relative;
        max-width: $basewidth;
        width: 90%;
        margin: auto;

        // 大圖
        div.img_lawn {
            width: 70%;
            padding: 40px 0 80px;

            img {
                width: 100%;
                border-radius: 20px;
            }

            @include large_tablets {
                padding-bottom: 50px;
                width: 100%;
            }
        }

        div.title {
            position: absolute;
            right: 4vw;
            top: 100px;
            writing-mode: vertical-lr;

            @include large_tablets {
                writing-mode: horizontal-tb;
                position: relative;
                top: 0;
                padding-left: 8%;
            }

            h2 {
                @include h2_vertical;

                @include large_tablets {
                    @include h2;
                    line-height: normal;
                }
            }

            span.important_color {
                color: $importantColor;
            }

            span.english {
                @include paragraph;
                line-height: 60px;
                letter-spacing: 0.3rem;
                color: $normalColor;
                font-family: $font_family_en;
            }
        }

        div.img_chick {
            width: 35%;
            position: absolute;
            top: 550px;
            right: 5%;

            img {
                width: 100%;
                border-radius: 20px;
            }

            @media (max-width: 900px) {
                display: none;
            }
        }

        div.img_eggs {
            width: 42%;
            position: absolute;
            bottom: 100px;
            right: 0;

            img {
                width: 100%;
                border-radius: 20px;
            }

            @include large_tablets {
                display: none;
            }
        }

        div.text {
            width: 45%;
            padding: 0 0 25% 3%;
            @include paragraph;

            @include large_tablets {
                width: 90%;
                margin: auto;
                padding: 3% 0 25%;
            }
            @include tablets {
                padding-bottom: 10%;
            }

            p {
                padding: 15px 0;
            }
        }

        &::before {
            content: '';
            position: absolute;
            width: 25%;
            height: 13%;
            bottom: 0;
            left: 10%;
            background: url(/images/home/img_hen.svg) no-repeat;

            @include tablets {
                width: 17%;
                top: 37%;
                left: auto;
                right: 5%;
                transform: scaleX(-1);
            }
            @include large_phones {
                display: none;
            }
        }

        div.deco_dialog {
            position: absolute;
            width: 20%;
            height: 8%;
            bottom: 6%;
            left: 25%;

            @include large_tablets {
                left: 30%;
            }
            @include tablets {
                display: none;
            }
        }
    }
}
</style>
