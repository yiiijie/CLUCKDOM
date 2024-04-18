<script setup>
import { reactive } from 'vue';

const navItems = reactive([
    {
        label:'關於我們',
        label_en:'ABOUT US',
        route: '/about',
    },
    {
        label:'精選商品',
        label_en:'PRODUCTS',
        route: '/products',
    },
    {
        label:'通路門市',
        label_en:'STORES',
        route: '/stores',
    },
    {
        label:'常見問題',
        label_en:'FAQ',
        route: '/faq',
    },
])
</script>

<template>
    <footer class="footer">
        <div class="footer_inner">
            <div class="footer_logo">
                <router-link to="/">
                    <img src="/images/home/header/logo_red.svg" alt="logo_red">
                </router-link>
            </div>
            <div class="footer_main">
                <div class="footer_info">
                    <ul class="btn_link">
                        <li>
                            <router-link to="/contact-us">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon"/>
                                <span>聯絡我們</span>
                            </router-link>
                        </li>                              
                        <li>
                            <a href="https://www.google.com/maps/@25.1052087,121.5919296,19.03z?hl=zh-TW&entry=ttu" target="_blank">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon" />
                                <span>110 臺北市內湖區碧山路44巷</span>
                            </a>
                        </li>
                    </ul>
                    <span class="contact_icon">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon fb"/>
                        <font-awesome-icon :icon="['fab', 'instagram']" 
                        class="icon ig"/>
                    </span>
                </div>
                <ul class="footer_nav">                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <a :href="navItem.link">
                            <router-link :to="navItem.route" class="nav_link">
                                <span class="label">{{ navItem.label }}</span>
                                <br>
                                <span class="label_en">{{ navItem['label_en'] }}</span>
                                <span class="circle"></span>
                            </router-link>
                        </a>                    
                    </li>                         
                </ul>     
            </div>
        </div>
        <p class="copyright">本網站僅供個人學習、展示之用。參考資源: 伊東養鶏場、Tamarando</p>
        
        <div class="footer_lawn">
            <img src="/images/footer/lawn.svg" alt="裝飾圖">
        </div>
        <div class="footer_hen">
            <img src="/images/footer/hen.svg" alt="裝飾圖">
        </div>
        <div class="footer_grass">
            <img src="/images/footer/grass.svg" alt="裝飾圖">
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/footer';
</style>