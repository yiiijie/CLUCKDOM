<script setup>
import { reactive } from 'vue';


const sets = reactive([
    {   id: '1',
        name: '頂級悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
    {   id: '1',
        name: '頂級悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
    {   id: '1',
        name: '頂級悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
    {   id: '1',
        name: '頂級悠活好蛋組合',
        imgPath:'/images/products/sets/eggs_set.jpg',
        setIntro:'如果還在猶豫的話，這組合絕對是完美選擇！快送給你心愛的人，他們一定會深深喜歡上！',
        currentPrice:'NT$399',
        originalPrice:'NT$450',
    },
])
</script>

<template>

    <section class="sets_inner">
        <div class="title">
            <div class="subtitle_icon">
                <img src="/images/products/sets/subtitle_dialog.svg" alt="副標">
            </div>
            <h2>美食愛好者必選<br>口感極棒的鷄蛋禮盒</h2>
        </div>
        <ul class="sets_container" >
            <li v-for="set in sets" :key="set.id">
                <div class="set_img">
                    <img :src="set.imgPath" alt="產品圖">
                </div>
                <div class="txt">
                    <span>{{ set.name }}</span>
                    <p>{{ set.setIntro }}</p>
                </div>
                <div class="contents">
                    <span>
                        <font-awesome-icon icon="square-check" class="check_box"/>
                        頂級好蛋10入 1盒
                    </span>
                    <span>
                        <font-awesome-icon icon="square-check" class="check_box"/>
                        悠活好蛋10入 1盒
                    </span>
                    <span>
                        <font-awesome-icon icon="square-check" class="check_box"/>
                        贈 手工雞蛋布丁3入 1盒
                    </span>
                </div>
                <div class="price_wrap">
                    <div class="price">
                        <span>1組</span>
                        <span>{{ set.currentPrice }}</span>
                        <span>{{ set.originalPrice }}</span>
                    </div>
                    <RouterLink :to="'/'" class="to_products_detail_page">
                        <font-awesome-icon icon="cart-shopping" class="cart_icon" />
                        <span>加入</span>
                    </RouterLink>       
                </div>
            </li>
        </ul>

    </section>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/components/products-set/products-set";
</style>