<script setup>
import { reactive } from 'vue'


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
                <RouterLink :to="'/'">
                    <img src="/images/home/header/logo_red.svg" alt="logo_red">
                </RouterLink>
            </div>
            <div class="footer_main">
                <div class="footer_info">
                    <ul class="btn_link">
                        <li>
                            <RouterLink :to="'/'">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon"/>
                                <span>聯絡我們</span>
                            </RouterLink>
                        </li>                              
                        <li>
                            <a href="https://www.google.com/maps/search/台北市政府/@25.03799,121.5617635,17z/data=!3m1!4b1?entry=ttu">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon" />
                                <span>110 台北市信義區市府路1號</span>
                            </a>
                        </li>
                    </ul>
                    <!-- 社群連結icon -->
                    <span class="contact_icon">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon fb"/>
                        <font-awesome-icon :icon="['fab', 'instagram']" 
                        class="icon ig"/>
                    </span>
                </div>
                <ul class="footer_nav">                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <a :href="navItem.link">
                            <RouterLink :to="navItem.route" class="nav_link">
                                <span class="label">{{ navItem.label }}</span>
                                <br>
                                <span class="label_en">{{ navItem['label_en'] }}</span>
                                <span class="circle"></span>
                            </RouterLink>
                        </a>                    
                    </li>                         
                </ul>     
            </div>
        </div>
        <p class="copyright">本網站僅供個人學習、展示之用。參考資源: 伊東養鶏場、Tamarando</p>
        
        <div class="footer_lawn">
            <img src="/images/footer/lawn.svg" alt="">
        </div>
        <div class="footer_hen">
            <img src="/images/footer/hen.svg" alt="">
        </div>
        <div class="footer_grass">
            <img src="/images/footer/grass.svg" alt="">
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/footer';
</style>