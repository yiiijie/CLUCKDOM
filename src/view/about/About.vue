<script setup>
import { reactive } from 'vue';
import FarmingChart from '@/components/farming-chart/FarmingChart.vue';
// import HeaderBanner from '@/components/header-banner/headerBanner.vue';
import Navbar from '@/components/global/Navbar.vue';
import useNavbarVisibility from '@/composables/useNavbarVisibility';
import EnvironmentCarousel from '@/components/func-items/EnvironmentCarousel.vue';

const { showNavbar } = useNavbarVisibility();

const cards = reactive([
    {
        id: "1",
        markName: "「CAS」認證",
        imgPath: "/images/about/CAS.svg",
        description: "CAS蛋品之生產場(廠)其軟硬體設備與衛生管理均良好，且經專家評鑑合格，蛋品及生產場之飼料亦經中央畜產會檢驗合格。",
    },
    {
        id: "2",
        markName: "穀研所潔淨標章",
        imgPath: "/images/about/clean_label.svg",
        description: "最高級的潔淨標章，完全不添加食品添加物，也不可額外添加天然香料、天然色素及使用加工助劑，是百分之百潔淨認證。",
    },
    {
        id: "3",
        markName: "動物福利標章",
        imgPath: "/images/about/eggs_alliance.png",
        description: "標章認證的牧場尊重雞隻天性，絕不進行「強迫換羽」，每日紀錄及監控雞隻的健康，給予專業的飼養照顧。",
    },
])
</script>

<template>
    
    <div>
        <div v-if="showNavbar" class="navbar">
            <Navbar />
        </div>
        
        <section class="header_container">
            <!-- <header-banner
                bannerImage="/images/about/header_banner.jpg"
                sloganText="關於鷄蛋王國"
                sloganEnText="About CLUCKDOM">
            </header-banner> -->
            <header-banner>
                <template #header_banner_img>
                    
                </template>
            </header-banner>
            <HeaderBanner />
            <img class="header_wave" src="/images/header_wave.png" alt="wave">
        </section>
        <section class="intro_inner" data-aos="fade-up" data-aos-duration="1500"> 
            <div class="title">
                <span>✤ Nurturing Eggs ✤</span> 
                <h1>
                    吃著健康又快樂。
                    <br>
                    用<span class="secondary_color">心</span>孵育極致鷄蛋
                    <br>
                    以<span class="important_color">愛</span>澆灌土地
                </h1>           
            </div> 
            <div class="img_premium_eggs">
                <img src="/images/about/img_premium_eggs.png" alt="台灣產地優質鷄蛋">
            </div>
        </section>

        <section class="certification">
            <div class="certification_inner">
                <h2 class="title">榮獲多項品質認證</h2>
                <p class="content">善待動物並提供友善的飼養環境已經是普世的價值觀，消費者關心畜產品曾經受到何種對待，因此，會選擇標榜高動物福利之畜產品，進而使動物福利也成為產品的附加價值。
                </p>
                <ul class="flip_card_list">
                    <li v-for="card in cards" :key="card.id" class="flip_card_item"
                    data-aos="zoom-in"> 
                        <div class="flip_card_container">
                            <div class="flip_card_front">
                                <div class="mark">
                                    <h3 class="mark_name">{{ card.markName }}</h3>
                                    <div class="pic">
                                        <img :src="card.imgPath" alt="CAS認證標章">
                                    </div>
                                </div>
                            </div>
                            <div class="flip_card_back"> 
                                <p class="mark_description">{{ card.description }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 牧場環境 輪播 -->
        <EnvironmentCarousel />
        <section class="cluckdom_intro">
            <div class="environment_bg">
                <img src="/images/about/environment_bg.jpg" alt="牧場環境圖">
            </div>
            <ul class="cluckdom_intro_inner">
                <li class="card_item">
                    <h2 class="card_title">鷄蛋王國的放牧鷄過得比我還快樂</h2>
                    <p class="content">在這裡，我們相信健康的雞群才能生產出最美味的蛋和最優質的家禽產品。我們的牧場坐落在郁郁蔥蔥的山上，每天都是一個和諧的動物樂園！</p>
                    <p class="content"><span class="secondary_color">牧場採低密度飼養，雞群們有足夠的空間在草地上自由奔跑</span>，符合台灣蛋雞動物指南標準飼養，並獲得友善認證，提供您最健康有活力的雞蛋。</p>
                </li>
                <li class="card_item">
                    <h2 class="card_title">無抗生素飼養<br>頂級放牧土鷄蛋</h2>
                    <p class="content">我們選用通過 FSSC 22000 食品安全驗證的飼料，同時提高飼料配方中蛋白質的比例，<span class="secondary_color">更添加金盞花與能增加抵抗力的多種植物精油，讓農場能達到全程「無抗生素飼養」。</span></p>
                    <p class="content">儘管成本較高，但也可避免因營養不良而出現脫羽和互啄等傷害。根據統計，母雞通常在70週齡後開始老化衰弱，但我們養的雞兒，至105週齡仍保持頭好壯壯、充滿活力！</p>
                    <span class="info_source">資料參考來源：https://www.buydirectlyfromfarmers.tw/catalogue/Longtan-freerangeeggs-Chang_3989/              
                    </span>
                </li>
                <li class="card_item">
                    <h2 class="card_title">照顧動物福利<br>鷄蛋吃得更安心</h2>
                    <p class="content">我們每天收集牧場內剛下的新鮮雞蛋，並將它們置於<span class="secondary_color">含有次氯酸水的布上輕輕擦拭，消除表面殘留的細菌和灰塵。</span>待乾燥後，我們小心地將每一顆雞蛋包裝在紙漿盒中，然後安全地送到消費者手中。</p>
                    <p class="content">我們投入大量心力和成本來經營牧場，<span class="secondary_color">建立符合動物保護法的人道生產標準，希望逐步改變消費者購買生鮮雞蛋的傳統模式</span>，讓更多人支持友善雞蛋的生產。</p>
                    <span class="info_source">資料參考來源：
                        https://www.yooho.com.tw/article.php?id=682
                    </span>
                </li>
                <li class="card_item">
                    <h2 class="card_title">歡迎光臨！<br>來看我們如何養鷄</h2>
                    <p class="content">想要了解更多關於養雞的知識嗎？別忘了追蹤我們的Instagram帳號，您將能夠獲得更多關於我們牧場的資訊、日常生活和養雞的專業知識。一起來探索雞蛋王國的世界吧！</p>
                    <button class="ins_btn">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="ig"/>
                        追蹤 Instagram
                    </button>
                </li>
            </ul>
        </section>
        <section class="about_us_inner">
            <div class="text" data-aos="fade-right">
                <div class="title_en">
                    <img src="/images/about/img_eggs_line.svg" alt="裝飾線">
                    <h2 class="english">ABOUT US</h2>
                </div>
                <h2 class="title">細心耕耘，不僅是美食
                    <br>
                    更是<span class="secondary_color">健康</span>與<span class="secondary_color">自然</span>的完美融合
                </h2>
                <div class="content">
                    <p>目前雞場飼養約六萬隻雞，我們採用自動化系統管理飼料供應等工作，唯一仍然由人手操作的環節是雞蛋的收集。</p>
                    <p>我們深知環境對於雞蛋的品質影響重大，因此我們只使用純天然水及山海的恩惠，提供高品質同時，提供充滿快樂氣息的生長環境給我們的雞隻。 </p>
                </div>
            </div>
            <div class="img_owner">
                <img data-aos="fade-left" src="/images/about/img_owner.jpg" alt="雞蛋王國的女主人">
            </div>
        </section>
    
        <FarmingChart />
    </div>
</template>


<style scoped lang="scss">
    section.header_container {
        position: relative;

        img.header_wave {
            @extend %header_wave;
        }
    }

    section.intro_inner {
        max-width: $basewidth;
        width: 90%;
        display: flex;
        margin: 70px auto 80px;
        justify-content: space-evenly;

        @include large_tablets {
            flex-direction: column;
        }

        div.title {
            margin-top: 5%;
            writing-mode: vertical-lr;

            @include large_tablets {
                margin: auto;
            }
            
            h1 {
                @include h1_vertical;
                
                span.important_color{
                    @include h1_vertical;
                    color: $importantColor;
                }
                span.secondary_color{
                    @include h1_vertical;
                    color: $secondaryColor;
                }
            }

            span {
                @include paragraph_en;
                line-height: 4.8;
            }
        }

        div.img_premium_eggs {
            width: clamp(280px,55vw,600px);

            @include large_tablets {
                margin: auto;
                display: block;
            }

            img {
                width: 100%;
            }
        }
    }
    
    section.certification {
        width: 100%;
        background-color: $productsBgColor;

        div.certification_inner {
            max-width: $basewidth;
            width: 90%;
            margin: auto;
            padding: 80px 0;
            text-align: center;

            h2.title {
                @include h2;
                margin-bottom: 10px;
            }

            p.content {
                @include paragraph;
                padding: 10px 8vw 5%;
            }
        }
    }

    div.certification_inner {

        > ul.flip_card_list {
            display: flex;
            justify-content: space-evenly;

            @include tablets {
                flex-direction: column;
            }

            > li.flip_card_item {
                max-width: 350px;
                width: 20vw;
                height: 25vw;        
                cursor: pointer;
                perspective: 2000px;
                border-radius: 75% 75% 75% 75% / 90% 90% 60% 60%;

                @include large_tablets {
                    width: 25vw;
                    height: 32vw; 
                }
                @include tablets {
                    width: 50vw;
                    height: 60vw;
                    margin: 0 auto 30px; 
                }
                
                &:hover .flip_card_container {
                    transform: rotateY(180deg);
                }
                
                div.flip_card_container {
                    position: relative;
                    height:100%;
                    width: 100%;
                    transform-style: preserve-3d;
                    border-radius: 75% 75% 75% 75% / 90% 90% 60% 60%;
                    transition: transform 0.6s cubic-bezier(0.175, 0.9, 0.32, 1.275);

                    div.flip_card_front {
                        height:100%;
                        width:100%;
                        position: absolute;
                        backface-visibility: hidden;
                        background-color: $normalBgColor;
                        border-radius: 75% 75% 75% 75% / 90% 90% 60% 60%;

                        div.mark {
                            width: 100%;
                            height: 100%;

                            div.pic {
                                width: 60%;
                                position: absolute;
                                bottom: 10%;
                                left: 50%;
                                transform: translateX(-50%);

                                img {
                                    width: 100%;
                                }
                            }

                            h3.mark_name {
                                @include h3;
                                position: relative;
                                top: 18%;
                            }

                            .arrow_down {
                                font-size: 1.4rem;
                            }
                        }
                    }

                    div.flip_card_back {
                        height:100%;
                        width:100%;
                        position: absolute;
                        transform: rotateY(180deg);
                        backface-visibility: hidden;
                        background-color: $normalBgColor;
                        border-radius: 75% 75% 75% 75% / 90% 90% 60% 60%;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 65%;
                            height: 55%;
                            bottom: 13%;
                            left: 50%;
                            transform: translateX(-50%);
                            border-radius: 100%;
                            background-color: $textBgColor;
                        }

                        p.mark_description {
                            @include content_font;
                            width: 80%;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                        }
                    }
                }
            }
        }
    }

    section.cluckdom_intro {    
        div.environment_bg {
            width: 100%;
            position: sticky;
            top: 0;
            left: 0;

            img {
                width: 100%;
                height: 100vh;
                object-fit: cover;
            }
        }

        ul.cluckdom_intro_inner {
            position: relative;
            top: -450px;
            width: 80%;
            margin: auto;

            @include large_phones {
                width: 85%;
            }

            li.card_item {
                min-width: 350px;
                width: 35%;
                padding: 5%;
                margin: 8% 0;
                opacity: 0.97;
                border-radius: 40px;
                text-align: justify;
                box-sizing: border-box;
                background-color: $normalBgColor;

                @include large_tablets {
                    min-width: auto;
                    width: 100%;
                    padding: 10%;
                    margin: 15% 0;
                    box-sizing: border-box;
                }
                @include tablets {
                    margin: 20% auto;
                }

                h2.card_title {
                    @include h2;
                    position: relative;
                    text-align: center;
                    padding-bottom: 50px;
                    color: $secondaryText;
                    font-weight: $fWBold;

                    &::after {
                        content: '';
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        width: 40px;
                        height: 20px;
                        margin: 0 auto;
                        background-repeat: no-repeat;
                        background-image: url(/images/about/img_eggs_line.svg);
                    }
                }

                p.content {
                    @include paragraph;
                    padding-top: 20px;

                    span.secondary_color {
                        font-weight: $fWBold;
                        color: $secondaryColor;
                    }
                }

                span.info_source {
                    @include small_font;
                    display: block;
                    padding-top: 10px;
                    color: $remark;
                    text-align: left;
                    word-wrap: break-word; // 單字分行
                }

                button.ins_btn {
                    @include paragraph;
                    border: none;
                    width: 100%;
                    margin: 30px 0 0;
                    padding: 10px 0;
                    border-radius: 50px;
                    cursor: pointer;
                    background-color: $primaryColor;
                    color: $normalBgColor;
                    transition: .2s;

                    &:hover {
                        background-color: $normalBtnColor;
                        transition: .2s;
                    }

                    .ig {
                        font-size: 2rem;
                        margin-right: 5px;
                    }
                }
            }
        }
    }

    section.about_us_inner {
        max-width: $basewidth;
        width: 85%;
        display: flex;
        align-items: center;
        margin: 0 auto 8%;

        @include large_tablets {
            flex-direction: column;
        }

        div.text {
            div.title_en {       
                h2.english {
                    @include h2_en;

                    @include large_tablets {
                        text-align: center;
                    }
                }

                img {
                    margin-bottom: 2%;
                    width: 9%;

                    @include large_tablets {
                        display: none;
                    }
                }
            }

            h2.title {
                @include h2;
                padding: 5% 0;
                position: relative;

                @include large_tablets {
                    text-align: center;
                    padding: 2% 0;
                }

                span.secondary_color {
                    color: $secondaryColor;
                }
            }
        
            div.content {
                width: 80%;

                @include large_tablets {
                    margin: auto;
                    padding: 2% 0;
                    text-align: center;
                }
                @include tablets {
                    width: 90%;
                }
                @include large_phones {
                    width: 90%;
                    padding: 4% 0;
                }

                p {
                    @include paragraph;
                    padding: 15px 16% 15px 0;

                    @include large_tablets {
                        display: inline;
                        margin: auto;
                        padding: 0;
                    }
                }
            }
        }

        div.img_owner {
            width: 100%;

            @include large_tablets {
                height: 500px;
                padding: 5% 0;
            }
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 40px;
            }
        }
    }
</style>