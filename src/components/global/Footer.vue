<script setup>
import { reactive } from 'vue'

const navItems = reactive([
    {
        label: '關於我們',
        label_en: 'ABOUT US',
        route: '/about',
    },
    {
        label: '精選商品',
        label_en: 'PRODUCTS',
        route: '/products',
    },
    {
        label: '通路門市',
        label_en: 'STORES',
        route: '/stores',
    },
    {
        label: '常見問題',
        label_en: 'FAQ',
        route: '/faq',
    },
])
</script>

<template>
    <footer>
        <img class="wave" src="/images/footer/wave.svg" alt="wave" />
        <div class="footer_inner">
            <div class="footer_logo">
                <router-link to="/">
                    <img
                        src="/images/home/header/logo_red.svg"
                        alt="logo_red"
                    />
                </router-link>
            </div>
            <div class="footer_main">
                <div class="footer_info">
                    <ul class="btn_link">
                        <li>
                            <router-link to="/contact-us">
                                <font-awesome-icon
                                    :icon="['fas', 'circle-right']"
                                    class="icon"
                                />
                                <span>聯絡我們</span>
                            </router-link>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/maps/@25.1052087,121.5919296,19.03z?hl=zh-TW&entry=ttu"
                                target="_blank"
                            >
                                <font-awesome-icon
                                    :icon="['fas', 'circle-right']"
                                    class="icon"
                                />
                                <span>110 臺北市內湖區碧山路44巷</span>
                            </a>
                        </li>
                    </ul>
                    <span class="contact_icon">
                        <font-awesome-icon
                            :icon="['fab', 'facebook-f']"
                            class="icon fb"
                        />
                        <font-awesome-icon
                            :icon="['fab', 'instagram']"
                            class="icon ig"
                        />
                    </span>
                </div>
                <ul class="footer_nav">
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <a :href="navItem.link">
                            <router-link :to="navItem.route" class="nav_link">
                                <span class="label">{{ navItem.label }}</span>
                                <br />
                                <span class="label_en">{{
                                    navItem['label_en']
                                }}</span>
                                <span class="circle"></span>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="copyright">
            本網站僅供個人學習、展示之用。參考資源: 伊東養鶏場、Tamarando
        </p>

        <div class="footer_lawn">
            <img src="/images/footer/lawn.svg" alt="裝飾圖" />
        </div>
        <div class="footer_hen">
            <img src="/images/footer/hen.svg" alt="裝飾圖" />
        </div>
        <div class="footer_grass">
            <img src="/images/footer/grass.svg" alt="裝飾圖" />
        </div>
    </footer>
</template>

<style scoped lang="scss">
%footer_illust {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-repeat: no-repeat;

    img {
        width: 100%;
        display: block;
    }
}

footer {
    position: relative;
    background-color: $footerBgColor;

    img.wave {
        position: absolute;
        width: 100%;
        transform: translateY(-100%);
    }

    div.footer_inner {
        position: relative;
        max-width: $basewidth;
        width: 90%;
        display: flex;
        margin: auto;
        padding: 80px 0 50px 0;
        align-items: center;

        @include tablets {
            flex-direction: column;
            display: block;
            padding: 60px 0 0 0;
        }

        div.footer_logo {
            width: clamp(90px, 10vw, 120px);
            margin: 0 5vw 0 0;
            transition: 0.1s;

            @include tablets {
                margin: auto;
            }

            &:hover {
                opacity: 0.9;
                transform: rotate(5deg);
                transition: 0.1s;
            }
        }

        div.footer_info {
            display: flex;
            justify-content: space-between;

            @include tablets {
                flex-direction: column;
                align-items: center;
            }

            ul.btn_link {
                @include footer_font;
                margin-right: 5vw;

                @include tablets {
                    display: flex;
                    margin: 15px auto 15px;
                }

                li {
                    padding: 2px 0;
                    @include tablets {
                        &:first-child {
                            margin-right: 20px;
                        }
                    }
                }

                li > a {
                    color: $importantColor;
                    text-decoration: none;
                    transition: 0.3s;

                    &:hover {
                        color: $secondaryColor;
                    }

                    &:hover > .icon {
                        color: $secondaryColor;
                        transform: translateX(5px);
                    }

                    .icon {
                        margin-right: 8px;
                        transition: 0.3s;
                    }
                }
            }

            span.contact_icon {
                .icon {
                    width: 20px;
                    height: 20px;
                    padding: 12px;
                    border-radius: 50%;
                    cursor: pointer;
                    color: $normalColor;

                    &:hover {
                        @include hover_rotate;
                    }
                }
                .fb {
                    background-color: #485da1;
                    margin-right: 10px;
                }
                .ig {
                    background-color: $primaryColor;
                }
            }
        }

        ul.footer_nav {
            display: flex;
            padding-top: 40px;
            justify-content: space-between;

            @include tablets {
                flex-direction: column;
            }

            li {
                @include footer_font;
                text-align: center;

                @include tablets {
                    padding: 15px;
                    margin: 2px;
                    border-radius: 6px;
                    background-color: $normalColor;
                }

                a.nav_link {
                    text-decoration: none;
                    position: relative;
                    z-index: 1;

                    @include tablets {
                        display: flex;
                        align-items: center;
                    }

                    &:hover .circle {
                        opacity: 1;
                        transition: 0.3s;
                        transform: scale(2);
                    }

                    // 滑鼠hover至nav選項時的小圓圈
                    span.circle {
                        opacity: 0;
                        position: absolute;
                        width: 25px;
                        height: 25px;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        border-radius: 50%;
                        z-index: -1;
                        background-color: $textBgColor;
                        transition: 0.3s;

                        @include tablets {
                            display: none;
                        }
                    }

                    span.label {
                        color: $footerTextColor;
                        transition: 0.2s;

                        @include tablets {
                            margin-right: 15px;
                        }
                    }

                    span.label_en {
                        font-size: 1.4rem;
                        color: $secondaryColor;
                        font-family: $font_family_en;
                        transition: 0.2s;

                        @include tablets {
                            font-size: 1.2rem;
                        }
                    }

                    &:hover .label,
                    &:hover .label_en {
                        color: $primaryColor;
                    }
                }
            }
        }
    }

    .copyright {
        @include small_font;
        max-width: $basewidth;
        width: 90%;
        margin: auto;
        padding: 0 0 80px 0;
        color: $footerTextColor;

        @include tablets {
            width: calc(90% - 15px);
            padding: 30px 0 180px;
        }
    }

    .footer_lawn {
        @extend %footer_illust;
        width: clamp(220px, 40vw, 700px);
    }

    .footer_hen {
        @extend %footer_illust;
        width: clamp(140px, 28vw, 520px);
    }

    .footer_grass {
        @extend %footer_illust;
        width: clamp(70px, 15vw, 300px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
