<script setup>
import { reactive } from 'vue'
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue';



const navItems = reactive([
    {
        label:'關於我們',
        label_en:'ABOUT US',
    },
    {
        label:'精選商品',
        label_en:'PRODUCTS',
    },
    {
        label:'檢驗報告',
        label_en:'REPORTS',
    },
    {
        label:'通路門市',
        label_en:'STORES',
    },
    {
        label:'最新消息',
        label_en:'NEWS',
    },

])

const social = reactive([
    {
        index:'fb',
        link:'',
        icon:['fab', 'facebook-f'],
    },
    {
        index:'ig',
        link:'',
        icon:['fab', 'instagram'],
    },
])

</script>

<template>
    <HeaderCarousel class="header_carousel"/>
    <header class="header">
        <div class="header_inner">
            <div class="header_logo">
                <a href="#">
                    <img src="pic/logo_red.svg" alt="logo_red">
                </a>
            </div>
            <nav class="header_nav">
                <ul>                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <a :href="navItem.link">
                            <span
                                class="black_text">
                                {{ navItem.label }}
                            </span>
                            <br>
                            <span
                                class="brown_text">
                                {{ navItem['label_en'] }}
                            </span>
                        </a>                    
                    </li>                         
                </ul>         
            </nav>

            <div class="contact_icon">
                <div class="email">
                    <a href="#">
                        <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'envelope']" />
                    </a>
                </div>
                <div class="social">
                    <div v-for="item in social" :key="item.index" :class="item.index">
                        <a :href="item.link">
                            <font-awesome-icon
                            class="icon"
                            :icon="item.icon" />
                        </a>
                    </div>                
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/header';

    .header_carousel{
        position: relative;
    }
    .header{
        position: absolute;
        width: 100%;
        top: 20px;
    }
</style>