<script setup>
import { reactive } from 'vue'
import HeaderCarousel from '@/components/func-items/HeaderCarousel.vue';


const navItems = reactive([
    {
        label:'關於我們',
        'label_en':'ABOUT US',
    },
    {
        label:'精選商品',
        'label_en':'PRODUCTS',
    },
    {
        label:'檢驗報告',
        'label_en':'REPORTS',
    },
    {
        label:'通路門市',
        'label_en':'STORES',
    },
    {
        label:'最新消息',
        'label_en':'NEWS',
    },

])
</script>

<template>
    <header class="header">
        <HeaderCarousel />
        <div class="header_inner">
            <div class="header_logo">
                <a href="#">
                    <img src="pic/logo_red.svg" alt="logo_red">
                </a>
            </div>
            <nav class="header_nav">
                <ul>                 
                    <li v-for="navItem in navItems"
                    :key="navItem.label">
                        <a href="#">
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
                    <a href="">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div class="fbig">
                    <div class="fb">
                        <a href="">
                            <i class="fa-brands fa-facebook-f"></i> 
                        </a>
                        
                    </div>
                    <div class="ig">
                        <a href="">
                            <i class="fa-brands fa-instagram"></i> 
                        </a>
                        
                    </div>
                </div>                
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/header';
</style>