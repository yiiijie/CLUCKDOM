<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navItems = reactive([
    {
        label: '關於我們',
        route: '/about',
    },
    {
        label: '精選商品',
        route: '/products',
    },
    {
        label: '實體通路',
        route: '/physical-channel',
    },
    {
        label: '聯絡我們',
        route: '/contact-us',
    },
])
</script>

<template>
    <div>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <RouterLink to="/">
                        <img src="/images/logo/navbar_logo.svg" alt="logo" />
                    </RouterLink>
                </div>
                <ul class="header_nav_list">
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <RouterLink :to="navItem.route" class="nav_link">
                            <span class="label">{{ navItem.label }}</span>
                            <span class="circle"></span>
                        </RouterLink>
                    </li>
                </ul>
                <span class="contact_icon">
                    <font-awesome-icon
                        :icon="['fab', 'facebook-f']"
                        class="icon"
                    />
                    <font-awesome-icon
                        :icon="['fab', 'instagram']"
                        class="icon"
                    />
                    <router-link to="/contact-us">
                        <font-awesome-icon
                            :icon="['fas', 'envelope']"
                            class="icon"
                        />
                    </router-link>
                </span>
            </nav>
        </header>
    </div>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    position: fixed;
    top: 40px;
    z-index: 100;

    @include large_tablets {
        display: none;
    }
}

header > nav.navbar {
    max-width: calc($basewidth - 15%);
    width: 80%;
    height: 70px;
    display: flex;
    margin: auto;
    align-items: center;
    border-radius: 100px;
    background-color: $normalBgColor;
    box-shadow: 0 0 10px rgb(75, 67, 49, 0.2);

    div.logo img {
        width: 120px;
        margin-left: 40px;
    }

    ul.header_nav_list {
        display: flex;
        flex-grow: 1;
        justify-content: center;

        li {
            @include header_PC;
            position: relative;
            margin-right: 6%;
            z-index: 2; // 小圈圈的層級

            a.nav_link {
                text-decoration: none;
                position: relative;

                // 滑鼠hover至nav選項時的小圓圈動效
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

                &:hover .label {
                    color: $subtitleText;
                }
            }
        }
    }

    span.contact_icon {
        margin-right: 30px;

        .icon {
            width: 20px;
            height: 20px;
            padding: 12px;
            font-size: 1rem;
            border-radius: 50%;
            text-align: center;
            margin-left: 15px;
            cursor: pointer;
            color: $normalBgColor;
            background-color: $hoverBtnColorR;

            &:hover {
                @include hover_rotate;
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
</style>
