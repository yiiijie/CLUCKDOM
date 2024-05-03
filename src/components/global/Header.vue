<script setup>
import { ref, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue'
import SignInBtn from '@/components/global/SignInBtn.vue'
import CartBtn from '@/components/global/CartBtn.vue'

const router = useRouter()
const isHomePage = ref(true)
const isOpen = ref(false)

// 手機版 漢堡開關
const hamburgerBtn = () => {
    isOpen.value = !isOpen.value
}

// 手機版 漢堡點選 -> 跳轉頁面
const closeNavAndNavigate = (route) => {
    isOpen.value = false // 關閉導覽列
    router.push(route) // 並跳轉至當前點擊頁面
}

watchEffect(() => {
    isHomePage.value = router.currentRoute.value.name === 'home'
})

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
        label: '實體通路',
        label_en: 'CHANNEL',
        route: '/physical-channel',
    },
    {
        label: '聯絡我們',
        label_en: 'CONTACT',
        route: '/contact-us',
    },
])

const social = reactive([
    {
        class: 'fb',
        link: '',
        icon: ['fab', 'facebook-f'],
    },
    {
        class: 'ig',
        link: '',
        icon: ['fab', 'instagram'],
    },
])
</script>

<template>
    <HeaderCarousel v-if="isHomePage" />
    <!-- 登入的入口按鈕 & 購物車  -->
    <div class="header_btn_list">
        <SignInBtn />
        <CartBtn />
    </div>

    <!-- 手機版漢堡 & menu -->
    <div class="mobile_menu">
        <button @click="hamburgerBtn" class="hamburger_button">
            <div v-if="!isOpen">
                <font-awesome-icon icon="bars" class="icon" />
                <span class="text">MENU</span>
            </div>
            <div v-else>
                <font-awesome-icon icon="xmark" class="icon" />
                <span class="text">CLOSE</span>
            </div>
        </button>

        <transition name="slide">
            <div v-if="isOpen" class="menu_open">
                <ul class="menu_list">
                    <!-- 首頁的連結只在手機/平板顯示 -->
                    <li class="mobile_home_lick">
                        <RouterLink
                            to="/"
                            class="nav_link"
                            @click="closeNavAndNavigate('/')"
                        >
                            <font-awesome-icon
                                icon="circle-right"
                                class="arrow"
                            />
                            <span class="label">首頁</span>
                            <span class="label_en">HOME</span>
                        </RouterLink>
                    </li>
                    <!-- 與桌機共用的導覽列項目 -->
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink
                            :to="navItem.route"
                            class="nav_link"
                            @click="closeNavAndNavigate(navItem.route)"
                        >
                            <font-awesome-icon
                                icon="circle-right"
                                class="arrow"
                            />
                            <span class="label">{{ navItem.label }}</span>
                            <span class="label_en">{{
                                navItem['label_en']
                            }}</span>
                        </RouterLink>
                    </li>
                    <RouterLink to="/sign-in">
                        <SignInBtn class="signin_btn" />
                        <!-- <button class="signin_btn">會員登入</button> -->
                    </RouterLink>
                </ul>
                <!-- 社群連結 -->
                <div class="social_link">
                    <font-awesome-icon
                        :icon="['fab', 'facebook-f']"
                        class="social_icon"
                    />
                    <font-awesome-icon
                        :icon="['fab', 'instagram']"
                        class="social_icon"
                    />
                </div>
            </div>
        </transition>
    </div>
    <!-- ------ -->

    <header>
        <div class="header_inner">
            <div class="header_logo">
                <RouterLink to="/">
                    <img src="/images/home/header/logo_red.svg" alt="logo" />
                </RouterLink>
            </div>
            <nav class="header_nav">
                <ul class="header_nav_list">
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink :to="navItem.route" class="nav_link">
                            <span class="label">{{ navItem.label }}</span>
                            <br />
                            <span class="label_en">{{
                                navItem['label_en']
                            }}</span>
                            <span class="circle"></span>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="contact_icon">
                <RouterLink to="/contact-us" class="email">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'envelope']"
                    />
                </RouterLink>
                <div class="social">
                    <div
                        v-for="item in social"
                        :key="item.index"
                        :class="item.class"
                    >
                        <a :href="item.link">
                            <font-awesome-icon class="icon" :icon="item.icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- 手機版信箱 -->
    <RouterLink to="/contact-us" class="only_tablets_email">
        <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
    </RouterLink>
</template>

<style scoped lang="scss">
%menu_btn_style {
    width: 100%;
    @include content_font;
    padding: 10px 0;
    border-radius: 50px;
    font-weight: $fWBold;
    font-family: $font_family_title;
}

div.header_btn_list {
    display: flex;
    position: fixed;
    top: 0;
    right: 4%;
    z-index: 200;

    @include large_tablets {
        display: none;
    }
}

// 手機版漢堡
div.mobile_menu {
    display: none;

    @include large_tablets {
        display: block;
    }

    button.hamburger_button {
        position: fixed;
        top: 0;
        right: 0;
        width: 85px;
        height: 85px;
        cursor: pointer;
        border: none;
        z-index: 100;
        background-color: $normalColor;
        border-radius: 0 0 0 50px;
        box-shadow: 0 0 15px rgb(166, 166, 166, 0.3);

        .icon {
            font-size: 2rem;
            margin-bottom: 5px;
            color: $secondaryColor;
        }

        .text {
            @include smallFont_PC;
            display: block;
            font-size: 14px;
            font-family: $font_family_en;
        }
    }

    div.menu_open {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: $hamburgerBgColor;
        transition: all 0.5s;

        ul.menu_list {
            width: 80vw;
            margin: 30px auto;
            background-color: $normalBgColor;
            border-radius: 10px;
            padding: 40px;

            @include tablets {
                width: 70vw;
            }

            li {
                padding: 15px 0;
                color: #d9042b;
                width: 100%;
                border-bottom: 1.5px dotted $hoverBtnColorB;
                align-items: center;

                .arrow {
                    margin-right: 10px;
                    color: $primaryColor;
                }

                span.label {
                    @include content_PC;
                    padding-right: 10px;
                    font-weight: $fWBold;
                    font-family: $font_family_title;
                }

                span.label_en {
                    @include smallFont_PC($secondaryText);
                    font-family: $font_family_en;
                }
            }

            button.signin_btn {
                @extend %menu_btn_style;
                margin: 20px 0 0;
                cursor: pointer;
                background-color: $textBgColor;
            }
        }

        // 社群連結
        div.social_link {
            text-align: center;

            .social_icon {
                width: 20px;
                height: 20px;
                margin: 0 5px;
                padding: 10px;
                font-size: $h5Fz_PC;
                color: $primaryColor;
                border-radius: 50px;
                background-color: $normalBgColor;
            }
        }
    }
}
////////

header {
    width: 100%;
    position: absolute;
    top: 30px;
    z-index: 100;

    @include large_tablets {
        display: none;
    }

    div.header_inner {
        max-width: $basewidth;
        display: flex;
        margin: auto;
        gap: 3%;
        align-items: center;
        justify-content: center;

        div.header_logo {
            width: 110px;

            &:hover {
                transform: rotate(5deg);
                opacity: 0.9;
                transition: 0.1s;
            }

            img {
                width: 100%;
            }
        }

        nav.header_nav {
            width: 53%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 200px;
            background-color: #fff;

            ul.header_nav_list {
                flex: 0 1 75%;
                display: flex;
                justify-content: space-between;

                li {
                    @include header_PC;
                    position: relative;
                    text-align: center;
                    z-index: 2;

                    a.nav_link {
                        text-decoration: none;
                        position: relative;

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
                            background-color: $textBgColor;
                            z-index: -1;
                            transition: 0.3s;
                        }

                        &:hover .circle {
                            opacity: 1;
                            transition: 0.3s;
                            transform: scale(2);
                        }

                        span.label {
                            color: $primaryText;
                            transition: 0.2s;
                        }

                        span.label_en {
                            font-size: 14px;
                            color: $secondaryText;
                            font-family: $font_family_en;
                            transition: 0.2s;
                        }

                        &:hover .label,
                        &:hover .label_en {
                            color: $subtitleText;
                        }
                    }
                }
            }
        }

        div.contact_icon {
            display: flex;

            a.email {
                .icon {
                    padding: 30px;
                    margin: 15px 0;
                    font-size: 30px;
                    border-radius: 50%;
                    color: $secondaryColor;
                    background-color: $normalColor;
                    transition: 0.2s;

                    &:hover {
                        @include hover_rotate;
                        color: $normalColor;
                    }
                }
            }

            div.social {
                margin: 15px 0;

                .icon {
                    color: #fff;
                }

                .fb {
                    @extend %Social;
                    transition: 0.2s;
                    background-color: #485da1;

                    &:hover {
                        @include hover_rotate;
                    }
                }

                .ig {
                    @extend %Social;
                    transition: 0.2s;
                    margin-top: 10px;
                    background-color: #d74c38;

                    &:hover {
                        @include hover_rotate;
                    }
                }
            }
        }
    }
}

// 手機版信箱
a.only_tablets_email {
    display: none;

    @include large_tablets {
        position: fixed;
        display: block;
        bottom: 3vh;
        right: 3.5vw;
        z-index: 1000;

        .icon {
            padding: 30px;
            font-size: 30px;
            border-radius: 50%;
            color: $normalColor;
            background-color: $secondaryColor;
            transition: 0.2s;

            @include large_phones {
                padding: 18px;
                font-size: 25px;
            }

            &:hover {
                color: $secondaryColor;
                border: 1px solid $secondaryColor;
                background-color: $normalColor;
            }
        }
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

// 漢堡選單切換的過渡效果
.slide-enter-active {
    transform: translateY(-100%);
    transition: transform 0.02s;
}
.slide-leave-active {
    transform: translateY(0);
    transition: transform 0.02s;
}
.slide-enter-to {
    transform: translateY(0);
}
.slide-leave-to {
    transform: translateY(-100%);
}
</style>
