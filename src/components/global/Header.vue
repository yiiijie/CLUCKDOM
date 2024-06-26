<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SignInBtn from '@/components/global/SignInBtn.vue'
import CartBtn from '@/components/global/CartBtn.vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

const router = useRouter()
const navList = reactive([
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
        icon: ['fab', 'facebook-f'],
    },
    {
        class: 'ig',
        icon: ['fab', 'instagram'],
    },
])

const auth = getAuth()
const userDisplayName = ref(null)
const isNavOpen = ref(false)

// 手機版 漢堡開關
const hamburgerBtn = () => {
    isNavOpen.value = !isNavOpen.value
}

// 手機版 漢堡點選 -> 跳轉頁面
const closeNavAndNavigate = (route) => {
    isNavOpen.value = false
    router.push(route)
}

const loginStatus = computed(() => {
    return userDisplayName.value
        ? `${userDisplayName.value} 歡迎回來！`
        : '會員登入'
})

// 取得用戶名稱
onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userDisplayName.value = user.displayName
        } else {
            userDisplayName.value = null
        }
    })
})

const handleUserClick = () => {
    if (userDisplayName.value) {
        return
    } else {
        closeNavAndNavigate('/sign-in')
    }
}

const handleSignOut = async () => {
    try {
        await signOut(auth)
        userDisplayName.value = null
        closeNavAndNavigate('/')
    } catch (error) {
        console.error('登出失敗', error)
    }
}
</script>

<template>
    <!-- 登入的入口按鈕 & 購物車  -->
    <div class="header_btn_list">
        <SignInBtn />
        <CartBtn />
    </div>

    <!-- 手機版漢堡 -->
    <div class="mobile_menu">
        <button @click="hamburgerBtn" class="hamburger_button">
            <div v-if="!isNavOpen">
                <font-awesome-icon icon="bars" class="icon" />
                <span class="text">MENU</span>
            </div>
            <div v-else>
                <font-awesome-icon icon="xmark" class="icon" />
                <span class="text">CLOSE</span>
            </div>
        </button>

        <transition name="slide">
            <div v-if="isNavOpen" class="menu_open">
                <ul class="menu_list">
                    <!-- 首頁的連結只在手機/平板顯示 -->
                    <li>
                        <RouterLink
                            to="/"
                            class="nav_link"
                            @click="closeNavAndNavigate('/')">
                            <font-awesome-icon
                                icon="circle-right"
                                class="arrow" />
                            <span class="label">首頁</span>
                            <span class="label_en">HOME</span>
                        </RouterLink>
                    </li>
                    <li v-for="navItem in navList" :key="navItem.label">
                        <RouterLink
                            :to="navItem.route"
                            class="nav_link"
                            @click="closeNavAndNavigate(navItem.route)">
                            <font-awesome-icon
                                icon="circle-right"
                                class="arrow" />
                            <span class="label">{{ navItem.label }}</span>
                            <span class="label_en">{{
                                navItem['label_en']
                            }}</span>
                        </RouterLink>
                    </li>
                    <button class="sign_in_btn" @click="handleUserClick">
                        {{ loginStatus }}
                    </button>
                    <button class="sign_out_btn" @click="handleSignOut">
                        會員登出
                    </button>
                </ul>
                <div class="social_link">
                    <font-awesome-icon
                        :icon="['fab', 'facebook-f']"
                        class="social_icon" />
                    <font-awesome-icon
                        :icon="['fab', 'instagram']"
                        class="social_icon" />
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
                    <li v-for="navItem in navList" :key="navItem.label">
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
                        :icon="['fas', 'envelope']" />
                </RouterLink>
                <div class="social">
                    <div
                        v-for="item in social"
                        :key="item.index"
                        :class="item.class">
                        <a :href="item.link">
                            <font-awesome-icon class="icon" :icon="item.icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- 手機版信箱 -->
    <div class="only_tablets_email">
        <RouterLink to="/contact-us">
            <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
        </RouterLink>
    </div>
    <!-- 手機版購物車 -->
    <div class="only_tablets_cart">
        <font-awesome-icon class="icon" icon="cart-shopping" />
    </div>
</template>

<style scoped lang="scss">
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
            @include small_font;
            display: block;
            font-size: 1.4rem;
            font-family: $font_family_en;
        }
    }

    div.menu_open {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-color: $primaryColor;
        transition: all 0.5s;

        ul.menu_list {
            width: 80%;
            padding: 40px;
            margin: 30px auto;
            border-radius: 10px;
            background-color: $normalColor;

            @include tablets {
                width: 70%;
            }

            li {
                width: 100%;
                padding: 20px 0;
                align-items: center;
                border-bottom: 1.5px dotted $secondaryColor;

                .arrow {
                    font-size: 1.4rem;
                    margin-right: 10px;
                    color: $primaryColor;
                }

                span.label {
                    @include header_font;
                    padding-right: 10px;
                }

                span.label_en {
                    @include small_font;
                    color: $secondaryColor;
                    font-family: $font_family_en;
                }
            }

            button.sign_in_btn,
            button.sign_out_btn {
                @include header_font;
                width: 100%;
                padding: 15px 0;
                border-radius: 100px;
            }

            button.sign_in_btn {
                margin: 30px 0 15px;
                color: $normalColor;
                background-color: $secondaryColor;
            }

            button.sign_out_btn {
                background-color: $normalColor;
                border: 1px solid $secondaryColor;
            }
        }

        div.social_link {
            text-align: center;

            .social_icon {
                width: 20px;
                height: 20px;
                margin: 0 5px;
                padding: 10px;
                font-size: 2rem;
                color: $primaryColor;
                border-radius: 50px;
                background-color: $normalColor;
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
            background-color: $normalColor;

            ul.header_nav_list {
                flex: 0 1 75%;
                display: flex;
                justify-content: space-between;

                li {
                    @include header_font;
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
                            color: $primaryTextColor;
                            transition: 0.2s;
                        }

                        span.label_en {
                            font-size: 1.4rem;
                            color: $secondaryColor;
                            font-family: $font_family_en;
                            transition: 0.2s;
                        }

                        &:hover .label,
                        &:hover .label_en {
                            color: $primaryColor;
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
                    color: $normalColor;
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
                    background-color: $primaryColor;

                    &:hover {
                        @include hover_rotate;
                    }
                }
            }
        }
    }
}

// 手機版信箱
div.only_tablets_email {
    display: none;

    @include large_tablets {
        display: block;
        position: fixed;
        bottom: 5%;
        right: 25px;
        z-index: 98;
    }
    @include large_phones {
        bottom: 3%;
        right: 15px;
    }

    .icon {
        width: 25px;
        height: 25px;
        padding: 25px;
        font-size: 3rem;
        border-radius: 50%;
        cursor: pointer;
        color: $normalColor;
        background-color: $secondaryColor;

        @include large_phones {
            width: 18px;
            height: 18px;
            padding: 18px;
        }

        &:hover {
            color: $secondaryColor;
            background-color: $normalColor;
            border: 1px solid $secondaryColor;
        }
    }
}

// 手機版購物車
div.only_tablets_cart {
    display: none;

    @include large_tablets {
        display: block;
        position: fixed;
        bottom: calc(5% + 85px);
        right: 25px;
        z-index: 98;
    }
    @include large_phones {
        bottom: calc(3% + 65px);
        right: 15px;
    }

    .icon {
        width: 25px;
        height: 25px;
        padding: 25px;
        font-size: 3rem;
        border-radius: 50%;
        cursor: pointer;
        color: $normalColor;
        background-color: $primaryColor;

        @include large_phones {
            width: 18px;
            height: 18px;
            padding: 18px;
        }

        &:hover {
            color: $primaryColor;
            background-color: $normalColor;
            border: 1px solid $primaryColor;
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
