<script setup>
import { reactive } from 'vue'


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
    <footer class="footer">
        <img class="footerwave" src="/images/home/footer/footerwave.svg" alt="wave">
        <div class="footer_inner">
            <div class="footer_logo">
                <a href="#">
                    <img src="/images/home/header/logo_red.svg" alt="logo_red">
                </a>
            </div>
            <div class="footer_main">
                <div class="footer_info">
                    <ul class="btn_link">
                        <li>
                            <a href="">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon"/> 聯絡我們
                            </a>
                        </li>                              
                        <li>
                            <a href="">
                                <font-awesome-icon :icon="['fas', 'circle-right']" class="icon" /> 320 桃園市中壢區復興路46號9樓
                            </a>
                        </li>
                    </ul>
    
                    <!-- 社群連結icon -->
                    <ul class="social">
                        <li v-for="item in social" :key="item.index" :class="item.index">
                            <a :href="item.link">
                                <font-awesome-icon
                                class="icon"
                                :icon="item.icon" />
                            </a>
                        </li>                
                    </ul>
                </div>
                <ul class="footer_nav">                 
                    <li v-for="navItem in navItems" :key="navItem.label">
                        <a :href="navItem.link">
                            <span class="label">{{ navItem.label }}</span>
                            <br>
                            <span class="label_en">{{ navItem['label_en'] }}</span>
                        </a>                    
                    </li>                         
                </ul>     
            </div>
        </div>

        <p class="copyright">本網站為緯育TibaMe前端工程師班CHD102班學員專題作品，本平台僅供學習、展示之用。參考資源: 伊東養鶏場、Tamarando</p>

        <div class="footer_lawn"></div>
        <div class="footer_hen"></div>
        <div class="footer_grass"></div>
    </footer>
</template>

<style scoped lang="scss">
    @import '@/assets/scss/layout/footer';
</style>